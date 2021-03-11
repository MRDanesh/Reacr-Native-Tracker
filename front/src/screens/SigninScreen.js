import React, { useContext } from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {NavigationEvents} from 'react-navigation';

import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';
import {Context} from '../context/AuthContext';

const SigninScreen = () => {

    const {state, signin, clearErrorMessage} = useContext(Context);

    return (
        <View style={styles.container}>
            <NavigationEvents
                onWillFocus = {() => clearErrorMessage()}
            />
            <AuthForm
                headerText = 'Sing In to Your Account'
                errorMessage = {state.errorMessage}
                onSubmit = {({email, password}) => signin({email, password})}
                submitButtonText = 'Sing In'
            />
            <NavLink
            text = 'Dont have an account? Sing up then!'
            routeName = 'Signup'
            />
        </View>
        
    );
};

SigninScreen.navigationOptions = () => {
    return {
      headerShown: false,
    };
  };

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginBottom: 200
    }
});

export default SigninScreen;
