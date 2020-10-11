import { produce } from 'immer';
import { AuthForm, AuthAction } from './types';
import { createReducer } from 'typesafe-actions';
import { LOGIN_FAILURE, LOGIN_SUCCESS, REGISTER_FAILURE, REGISTER_SUCCESS } from './actions';

const initState = {
    username: '',
    password: '',
    auth: undefined,
    authError: undefined,
}

const auth = createReducer<AuthForm, AuthAction>(initState, {
    [LOGIN_SUCCESS] : (state, { payload: auth }) =>
        produce(state, draft => {
            draft.authError = undefined;
            draft.auth = auth;
        }),
    [LOGIN_FAILURE] : (state, { payload: error }) => 
        produce(state, draft => {
            draft.authError = error;
        }),
    [REGISTER_SUCCESS] : (state, { payload: auth }) =>
        produce(state, draft => {
            draft.authError = undefined;
            draft.auth = auth;
            
        }),
    [REGISTER_FAILURE] : (state, { payload: error }) => 
        produce(state, draft => {
            draft.authError = error;
        }),    
})

export default auth;