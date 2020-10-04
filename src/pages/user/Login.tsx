import React from 'react';
import AuthTemplate from '../../components/user/AuthTemplate';
import LoginForm from '../../components/user/LoginForm';

function Login(){
    return (
        <AuthTemplate>
            <LoginForm />
        </AuthTemplate>
    );
};

export default Login;