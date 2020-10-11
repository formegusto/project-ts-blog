import { AuthForm } from './types';
import { createAction } from 'typesafe-actions';
import { createRequestActionTypes } from './../../lib/util/createRequestSaga';

export const [LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE] = createRequestActionTypes('auth/LOGIN');
export const [REGISTER, REGISTER_SUCCESS, REGISTER_FAILURE] = createRequestActionTypes('auth/REGISTER');

export const login = createAction(LOGIN)<AuthForm>();
export const register = createAction(REGISTER)<AuthForm>();