import { InputAction, DynamicInput } from './types';
import { produce } from 'immer';
import { createReducer } from 'typesafe-actions';
import { CHANGE_FIELD, INITIALIZE_FORM } from './actions';

const initializeForm = {
    form: {}
}

const input = createReducer<DynamicInput,InputAction>(initializeForm, {
    [CHANGE_FIELD] : (state, { payload: event }) => 
        produce(state, draft => {
            console.log(state);
            draft.form[event.name] = event.value
        }),
    [INITIALIZE_FORM] : (state, { payload: initializeForm }) =>
        produce(state,draft => {
            draft.form = initializeForm 
        }),
});

export default input;