import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import useAuth from '../../lib/util/hooks/useAuth';
import useInput from '../../lib/util/hooks/useInput';
import Button from '../common/Button';

const AuthFormBlock = styled.div`
    color: ${palette.CoolGrey[5]};

    
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;

    form{
        display: flex;
        flex-flow: column;
        justify-content: center;
        align-items: center;
    }
`;

const StyledInput = styled.input`
    width: 100%;
    outline: none;
    border: 1px solid ${palette.CoolGrey[2]};
    border-radius: 1rem;
    font-size: 1.5rem;
    padding: .5rem;
    
	& + & {
        margin-bottom: 1rem;
    }
`;

type AuthFormProps = {
    type: string;
}

function AuthForm({type} : AuthFormProps) {
    const { input, onChange } = useInput(
        (type === "login") ?
        {
            username: '',
            password: '',
        }
        :
        {
            username: '',
            password: '',
            passwordConfirm: '',
        });
    const { onRegister, onLogin } = useAuth();

    return (
        <AuthFormBlock>
            <h3>{type === "login" ? "로그인" : "회원가입"}</h3>
            <form>
                <StyledInput value={input.username} placeholder="아이디" name="username" onChange={(e) => onChange(e.target)}/>
                <StyledInput value={input.password} placeholder="비밀번호" name="password" onChange={(e) => onChange(e.target)}/>
                {type === "register" && <StyledInput value={input.passwordConfirm} placeholder="비밀번호 확인" name="passwordConfirm" onChange={(e) => onChange(e.target)}/>}
                {(type === "login") ? 
                <>
                        <button onClick={(e) => onLogin(e)}>로그인</button>
                        <Button to="/register" fullWidth>회원가입</Button>
                </>
                :
                <>
                        <button onClick={(e) => onRegister(e)}>회원가입</button>
                        <Button to="/login" fullWidth>로그인</Button>
                </>
                }
            </form>
        </AuthFormBlock>
    )
}

export default AuthForm;