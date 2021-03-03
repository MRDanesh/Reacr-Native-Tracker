require('./models/User');
require('./models/Track');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const authRoutes = require('./routes/authRoutes');
const trackRoutes = require('./routes/trackRoutes');
const requireAuth = require('./middlewares/requireAuth');

const app = express();

app.use(bodyParser.json());

app.use(authRoutes);
app.use(trackRoutes);

const mongoUri = 'mongodb+srv://MRDaneshTracker:eEMHm4JM6iDX2ICt@tracker-cluster.fzgqx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
mongoose.connect(mongoUri, {
    useNewUrlParser: true,
    useCreateIndex: true, 
    useUnifiedTopology: true
});

mongoose.connection.on('connected', () => {
    console.log('Connected to mongo database!');
});

mongoose.connection.on('error', (err) => {
    console.log('Error in mongo database conncetion', err);
});


app.get('/', requireAuth, (req, res) => {
    res.send(`Your email is: ${req.user.email}`);
});

app.listen(3000, () => {
    console.log('Server is running on port 3000!');
});