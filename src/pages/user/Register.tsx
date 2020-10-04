import React from 'react';
import AuthTemplate from '../../components/user/AuthTemplate';
import RegisterForm from '../../components/user/RegisterForm';

function Register() {
    return (
        <AuthTemplate>
            <RegisterForm />
        </AuthTemplate>
    );
};

export default Register;