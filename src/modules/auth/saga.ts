import createRequestSaga from "../../lib/util/createRequestSaga";
import * as authAPI from '../../lib/api/auth';
import { LOGIN,REGISTER } from "./actions";
import { takeLatest } from "redux-saga/effects";

const loginSaga = createRequestSaga(LOGIN, authAPI.login);
const registerSaga = createRequestSaga(REGISTER, authAPI.register);

export function* authSaga() {
    yield takeLatest(LOGIN, loginSaga);
    yield takeLatest(REGISTER, registerSaga);
}