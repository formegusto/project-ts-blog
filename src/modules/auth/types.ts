import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

export type AuthAction = ActionType<typeof actions>;

export type Auth = {
    [key: string]: any,
    register : {
        username: string,
        password: string,
        passwordConfirm: string,
    },
    login : {
        username: string,
        password: string,
    },
};

export type changeType = {
    type: string,
    event: HTMLInputElement,
}