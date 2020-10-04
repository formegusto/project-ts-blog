import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';

const AuthTemplateBlock = styled.div` 
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    
    width: 100%;
    height: 100%;

    background: ${palette.CoolGrey[9]};

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const WhiteBox = styled.div`
	box-shadow: 0 0 8px rgba(0,0,0,0.025);
    padding: 2rem;
    width: 360px;
    background: ${palette.CoolGrey[0]};
    border-radius: 1rem;
`

type AuthTemplateProps = {
    children: React.ReactNode;
}

function AuthTemplate({children} : AuthTemplateProps) {
    return (
        <AuthTemplateBlock>
            <WhiteBox>
                {children}
            </WhiteBox>
        </AuthTemplateBlock>
    );
}

export default AuthTemplate;