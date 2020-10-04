import React from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import palette from '../../lib/styles/palette';

const buttonStyle = css<{ fullWidth? : boolean }>`
    border: none;
    border-radius: 4px;
    font-size: 1rem;
    font-weight: bold;
    padding: 0.25rem 1rem;
    color: ${palette.CoolGrey[0]};
    background: ${palette.CoolGrey[6]};
    transition: .7s;
    cursor: pointer;
    text-align: center;
    margin-top: .5rem;

    &:hover {
        background: ${palette.CoolGrey[3]};
    }

    ${props => 
        props.fullWidth && 
        css`
            padding-top: 0.75rem;
           padding-bottom: 0.75rem;
           width: 100%; 
           font-size: 1.125rem;
        `
    }
`;

const StyledButton = styled.button`
    ${buttonStyle}
`;

const StyledLink = styled(({fullWidth, ...parentProps}) => (
    <Link {...parentProps} />))<{ fullWidth? : boolean }>`
    ${buttonStyle}
`

type ButtonProps = {
    children: React.ReactNode;
    fullWidth?: boolean;
    to?: string;
};

const Button = (props : ButtonProps) => {
    return (
        props.to ? (
            <StyledLink {...props}/>
        )
        :
        (
            <StyledButton {...props}/>
        )
    )
};

export default Button;