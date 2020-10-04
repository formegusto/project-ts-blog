import { changeType } from './types';
import { createAction } from 'typesafe-actions';

export const CHANGE_FIELD = 'auth/CHANGE_FIELD';
export const INITIALIZE_FORM = 'auth/INITIALIZE_FORM';

export const changeField = createAction(CHANGE_FIELD)<changeType>();
export const initializeForm = createAction(INITIALIZE_FORM)<string>();