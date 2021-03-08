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
        default:
            return state;
    }
};

const signin = (dispatch) => {
    return ({email, password}) => {

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
            dispatch({type: 'add_error', payload: 'Something went wrong in signup!'})
        }
    };
}

const signout = (dispatch) => {
    return () => {
        
    };
}




export const {Context, Provider} = createDataContext(
    authReducer,
    {signin, signup, signout},
    {token: null, errorMessage: ''}
);
