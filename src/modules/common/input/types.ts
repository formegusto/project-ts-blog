import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

export type InputAction = ActionType<typeof actions>;

export type DynamicInput = {
    [key: string] : any,
    form: any,
};