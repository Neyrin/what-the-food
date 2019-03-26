import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ButtonStyled = styled.button`
    width: 100%;
    height: 60px;
    font-size: 25px;
    background-color: #2a9d8f;
    font-family: 'Montez';
    border: none;
    margin-bottom: 10px;
    transition: 0.4s;
    &:hover {
        background-color: #8ac9c1
        font-size:27px ;
    }
`
const Button = ({handleClick}) => {
    return(
        <ButtonStyled onClick={handleClick}>Find me something to eat!</ButtonStyled>
    )
}

Button.propTypes = {
    handleClick: PropTypes.func
}

export default Button;