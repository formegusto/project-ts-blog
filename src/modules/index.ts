import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import { authSaga } from './auth/saga';
import input from './common/input/reducer';
import auth from './auth/reducer';

const rootReducer = combineReducers({
    input,
    auth
});

export const rootSaga = function* (){
    yield all([authSaga()]);
}

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;