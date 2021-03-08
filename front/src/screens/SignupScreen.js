import React, { useState, useContext } from 'react';
import {View, StyleSheet, TouchableOpacity } from 'react-native';
import {Text, Button, Input} from 'react-native-elements';

import {Context as AuthContext} from '../context/AuthContext';
import Spacer from '../components/Spacer';
import { navigate } from '../navigationRef';

const SignupScreen = ({navigation}) => {
    const {state, signup} = useContext(AuthContext);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    console.log(state);

    return (
        <View style={styles.container}>
            <Spacer>
                <Text h3>Sign Up for Tracker</Text>
            </Spacer>
            <Spacer>
                <Input label= 'Email' 
                value = {email}
                onChangeText = {(text) => setEmail(text)}
                autoCapitalize = 'none'
                autoCorrect = {false}
                />
            </Spacer>
            <Spacer>
                <Input 
                label= 'Password' 
                value = {password}
                onChangeText = {(text) => setPassword(text)}
                autoCapitalize = 'none'
                autoCorrect = {false}
                secureTextEntry
                />
            </Spacer>
            {state.errorMessage ? <Text style={styles.errorMessage}>{state.errorMessage}</Text> : null}
            <Button title= 'Sign Up' onPress={() => signup({email, password})} />
            <TouchableOpacity onPress={() => navigation.navigate('signin')}>
                <Spacer>
                    <Text style={styles.link}>Already singup? Go to signin!</Text>
                </Spacer>
            </TouchableOpacity>
        </View>      
    );
};

SignupScreen.navigationOptions = () => {
    return {
      headerShown: false,
    };
  };

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        marginBottom: 200
    },
    errorMessage: {
        fontSize: 16,
        color: 'red',
        marginLeft: 15,
        marginTop: 15
    }, 
    link: {
        color: 'blue'
    }
});

export default SignupScreen;
