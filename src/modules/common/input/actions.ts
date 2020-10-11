import { createAction } from 'typesafe-actions';

export const CHANGE_FIELD = 'input/CHANGE_FIELD';
export const INITIALIZE_FORM = 'input/INITIALIZE_FORM';

export const changeField = createAction(CHANGE_FIELD)<HTMLInputElement>();
export const initializeForm = createAction(INITIALIZE_FORM)<any>();