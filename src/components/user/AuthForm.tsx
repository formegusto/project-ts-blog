import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import useAuth from '../../lib/util/useAuth';
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
    const { auth, onChange } = useAuth(type);
    
    return (
        <AuthFormBlock>
            <h3>{type === "login" ? "로그인" : "회원가입"}</h3>
            <form>
                <StyledInput value={auth.username} placeholder="아이디" name="username" onChange={onChange}/>
                <StyledInput value={auth.password} placeholder="비밀번호" name="password" onChange={onChange}/>
                {type === "register" && <StyledInput value={auth.passwordConfirm} placeholder="비밀번호 확인" name="passwordConfirm" onChange={onChange}/>}
                {(type === "login") ? 
                <>
                        <Button fullWidth>로그인</Button>
                        <Button to="/register" fullWidth>회원가입</Button>
                </>
                :
                <>
                        <Button fullWidth>회원가입</Button>
                        <Button to="/login" fullWidth>로그인</Button>
                </>
                }
            </form>
        </AuthFormBlock>
    )
}

export default AuthForm;