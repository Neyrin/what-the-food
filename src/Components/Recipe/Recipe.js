import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';


const RecipeStyled = styled.div `
    min-height: 400px;
    width: 100vw;
    background: #F5E4BB;
    overflow: hidden;
    font-size: 20px;
    color: #000000;
    img {
        padding: 5%;
        width: 80%;
        border: 5px solid #8ac9c1  
    }
    ul {
        list-style-type: none;
        padding: 0px;
        text-align: left;
        margin: 5%;
    }
    .Instructions {
        margin: 5%;
    }
    h2{
        font-family: 'Montez';
    }
`;

const Recipe = (props) => {
    return(
        <RecipeStyled>
            <img src={props.image} alt="A fancy meal"></img>
            <h2>{props.dishName}</h2>
            <p>{props.need}</p>
            <ul>{props.ingredients.map((ingredient, index) => {
                return <li key={ingredient}>{props.measures[index]+" "+ingredient}</li>
            })}</ul>
            <p className="Instructions">{props.instructions}</p>
            <h2>{props.enjoy}</h2>
            
        </RecipeStyled>
    )
}

Recipe.propTypes = {
    image: PropTypes.string,
    mealName: PropTypes.string,
    need: PropTypes.string,
    instructions: PropTypes.string,
    ingredients: PropTypes.array,
    measures: PropTypes.array,
    enjoy: PropTypes.string,
}
export default Recipe;