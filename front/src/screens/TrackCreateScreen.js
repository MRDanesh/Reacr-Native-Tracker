//import './_mocLocation';
import React, { useContext, useEffect, useState } from 'react';
import {StyleSheet} from 'react-native';
import {Text} from 'react-native-elements';
import {SafeAreaView, withNavigationFocus} from 'react-navigation';
import {requestPermissionsAsync, watchPositionAsync, Accuracy} from 'expo-location';

import Map from '../components/Map';
import {Context as LocationContext} from '../context/LocationContext';
import useLocation from '../hooks/useLocation';

const TrackCreateScreen = ({isFocused}) => {
    
    const {addLocation} = useContext(LocationContext);

    const [err] = useLocation((loc) => addLocation(loc), isFocused);
    

    return (
        <SafeAreaView forceInset={{top:'always'}}>
            <Text h2>TrackCreateScreen</Text>
            <Map/>
            {err ? <Text>Enable the Location Please!</Text> : null}
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    
});

export default withNavigationFocus (TrackCreateScreen);
