import createDataContext from './createDataContext';
import AsyncStorage from '@react-native-async-storage/async-storage';

import trackerApi from '../api/tracker';
import {navigate} from '../navigationRef';

const authReducer = (state, action) => {
    switch (action.type){
        case 'add_error':
            return {...state, errorMessage: action.payload};
        case 'signup':
            return {...state, errorMessage: '', token: action.payload};
        case 'signin':
            return {...state, errorMessage: '', token: action.payload};
        case 'clear_error_message':
            return {...state, errorMessage:''};
        case 'signout':
            return {...state, token: null, errorMessage: ''};
        default:
            return state;
    }
};

const clearErrorMessage = dispatch => () => {
    dispatch({type: 'clear_error_message'});
};

const signin = (dispatch) => {
    return async ({email, password}) => {
        try{
            const response = await trackerApi.post('/signin', {email, password});
            await AsyncStorage.setItem('token', response.data.token);
            dispatch({type: 'signin', payload: response.data.token});
            navigate('TrackList');
            console.log('click!');
        } catch (err) {
            console.log(err);
            dispatch({type: 'add_error', payload: 'Something went wrong in signin!'});
        }
    };
}

const signup = (dispatch) => {
    return async ({email, password}) => {

        try {
            const response = await trackerApi.post('/signup', {email, password});
            await AsyncStorage.setItem('token', response.data.token);
            dispatch({type: 'signup', payload: response.data.token});
            navigate('TrackList');
        } catch (err) {
            console.log(err);
            dispatch({type: 'add_error', payload: 'Something went wrong in signup!'})
        }
    };
};

const tryLocalSignin = dispatch => async () => {
    const token = await AsyncStorage.getItem('token');
    if (token) {
        dispatch({type: 'signin', payload: token});
        navigate('TrackList');
    } else {
        navigate('Signup');
    }
};

const signout = (dispatch) => {
    return async () => {
        await AsyncStorage.removeItem('token');
        dispatch({type: 'signout'});
        navigate('loginFlow');
    };
}




export const {Context, Provider} = createDataContext(
    authReducer,
    {signin, signup, signout, clearErrorMessage, tryLocalSignin},
    {token: null, errorMessage: ''}
);
