import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

export type AuthAction = ActionType<typeof actions>; 

export type AuthForm = {
    username: string,
    password: string,
    auth?: any,
    authError?: any,
}