import { combineReducers } from 'redux';
import input from './common/input/reducer';

const rootReducer = combineReducers({
    input
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;