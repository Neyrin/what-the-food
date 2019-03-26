import React from "react";
import styled from 'styled-components';

const TitleStyled = styled.h1 `
    font-family: 'Montez';
    font-size: 50px;
    color: #8ac9c1;
    margin: 0px;
    `;
    
    /* margin: 5px 10px 5px 10px; */
function Title(props) {
  return <TitleStyled>{props.title}</TitleStyled>;
}

export default Title;