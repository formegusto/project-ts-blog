import { AxiosResponse } from 'axios';
import client from './client';

export type AuthMinify = {
    username: string,
    password: string,
}

// 로그인
export const login = ({username, password} : AuthMinify): Promise<AxiosResponse<any>> =>
    client.post('/api/auth/login', {username, password});

// 회원가입
export const register = ({username, password} : AuthMinify): Promise<AxiosResponse<any>> =>
    client.post('/api/auth/register', {username, password});

// 로그인 상태 확인
export const check = ():Promise<AxiosResponse<any>> => client.get('/api/auth/check');