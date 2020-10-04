import { CHANGE_FIELD, INITIALIZE_FORM } from './actions';
import { createReducer } from 'typesafe-actions';
import { Auth, AuthAction } from './types';
import produce from 'immer';

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
        produce(state, draft => {
            draft[type][event.name] = event.value
        }),
    [INITIALIZE_FORM] : (state, { payload: type }) =>
        produce(state,draft => {
            draft[type] = initialState[type]
        }),
});

export default auth;