import { produce } from 'immer';
import { LoadingAction, LoadingForm } from './types';
import { START_LOADING, FINISH_LOADING } from './actions';
import { createReducer } from 'typesafe-actions';

const loading = createReducer<LoadingForm, LoadingAction>({}, {
    [START_LOADING] : (state, { payload: name }) =>
    produce(state, draft => {
        draft[name] = true
    }),
[FINISH_LOADING] : (state, { payload: name}) =>
    produce(state, draft => {
        draft[name] = false
    })
});

export default loading;