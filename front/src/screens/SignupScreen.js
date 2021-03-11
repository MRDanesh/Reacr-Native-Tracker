import React, { useContext} from 'react';
import {View, StyleSheet } from 'react-native';
import {NavigationEvents, SafeAreaView} from 'react-navigation';

import {Context as AuthContext} from '../context/AuthContext';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';


const SignupScreen = ({navigation}) => {
    const {state, signup, clearErrorMessage, tryLocalSignin} = useContext(AuthContext);

    

    return (
        <View style = {styles.container}>
            <NavigationEvents
                onWillFocus = {() => clearErrorMessage()}
            />
            <AuthForm
                headerText = 'Signup for Tracker'
                errorMessage = {state.errorMessage}
                onSubmit = {({email, password}) => signup({email, password})}
                submitButtonText = 'SignUp'
            />
            <NavLink
            routeName='Signin'
            text='Already Sing up? Go to signup!'
            />
            
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
    }
});

export default SignupScreen;
