import * as Location from 'expo-location';

const tenMetersWithDegrees = 0.000001;

const getLocation = (increment) => {
    return {
        timestamp: 10000000,
        coords: {
            speed: 0,
            heading: 0,
            accuracy: 5,
            AltitudeAccuracy: 5,
            altitude: 5,
            longtitude: -73.561668 + increment * tenMetersWithDegrees,
            latitude: 45.508888 + increment * tenMetersWithDegrees
        }
    };
};

let counter = 0;

setInterval(() => {
    Location.EventEmitter.emit('Expo.locationChanged', {
        watchId: Location._getCurrentWatchId(),
        location: getLocation(counter)
    });
    counter++;
}, 1000);