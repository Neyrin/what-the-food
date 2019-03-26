import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header';
import Recipe from '../Recipe/Recipe';
import Button from '../Button/Button';

class App extends Component {
  state = {
    meals: [],
    new: false
  }

  // Fetch the ingredient and measures
  getValueOfKeys(inputArg, regex) {
    return Object.keys(inputArg).filter((key) => {
      return regex.test(key) && inputArg[key]
      }).map((key) => inputArg[key])
  }

  fetchApi = () => {
    const api = 'https://www.themealdb.com/api/json/v1/1/random.php';

    fetch(api)
    .then(res => res.json())
    .then(data => {
      
      this.setState({
        meals: data.meals[0],
        new: true
      });
    });
  }
  
  render() {
    console.log(this.state.meals);
    return (
      <div className="App">
      <Header/>
      <Button handleClick={this.fetchApi}></Button>
      {this.state.new && (        
        <Recipe
          image={this.state.meals.strMealThumb}
          dishName={this.state.meals.strMeal}
          need="Ingredients needed: "
          instructions={this.state.meals.strInstructions}
          ingredients={this.getValueOfKeys(this.state.meals, /strIngredient/)}
          measures={this.getValueOfKeys(this.state.meals, /strMeasure/)} 
          enjoy="Enjoy your meal!"       
        />
      )}

          
      </div>
    );
  }
}

export default App;
