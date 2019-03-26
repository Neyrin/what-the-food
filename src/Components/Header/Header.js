import React from 'react';
import styled from 'styled-components';
import Title from '../Title/Title';

const HeaderStyled = styled.div `
    width: 100vw;
    height: 20%;
    background-color: #ff6f69;
    display: flex;
    justify-content: center;
    align-items: center;
    .border{
        padding:5px;
        background-color: #8ac9c1;
        width:80%;
    }
    .cutout{
        padding:5px 0;
        background-color: #ff6f69;
    }
`;

class Header extends React.Component {
    render(){
        return(
            <HeaderStyled>
                <div className="border">
                    <div className="cutout">
                        <Title title="Foodspo" />
                    </div>
                </div>
            </HeaderStyled>
        );
    }
} 

export default Header;