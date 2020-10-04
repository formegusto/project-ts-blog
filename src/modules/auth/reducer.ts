import { CHANGE_FIELD, INITIALIZE_FORM } from './actions';
import { createReducer } from 'typesafe-actions';
import { Auth, AuthAction } from './types';

const initialState: Auth = {
    register: {
        username: '',
        password: '',
        passwordConfirm: '',
    },
    login: {
        username: '',
        password: '',
    }
};

const auth = createReducer<Auth, AuthAction>(initialState, {
    [CHANGE_FIELD] : (state, { payload: { type, event }}) => 
        { return { ...state, 
            [type] : {
                ...state[type],
                [event.name]:event.value,
            }} },
    [INITIALIZE_FORM] : (state, { payload: type }) =>
        { return { ...state,
            [type] : initialState[type]
        }}
});

export default auth;