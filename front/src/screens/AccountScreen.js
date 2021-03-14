import React, { useContext } from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {SafeAreaView} from 'react-navigation';
import {Button} from 'react-native-elements';

import Spacer from '../components/Spacer';
import {Context as AuthContext} from '../context/AuthContext';
import Map from '../components/Map';

const AccountScreen = () => {
    const {signout} = useContext(AuthContext);
    return (
        <SafeAreaView forceInset={{top: 'always'}}>
            <Text style={{fontSize:48}}>AccountScreen</Text>
            <Button
                title = 'Sign out'
                onPress = {() => signout()}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({

});

export default AccountScreen;
