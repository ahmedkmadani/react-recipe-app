import React, { Component } from 'react';
import './App.css';
import Form from './component/Form'

const API_KEY = 'a80e9fb3cf21ba15def59da856ee4d28';

class App extends Component {
	state ={
		recipes: []
	}
	getRecipe = async (e) => {
		const recipeName = e.target.elements.recipeName.value;
		e.preventDefault();
		const api_call = await fetch(`https://www.food2fork.com/api/search?key=${API_KEY}&q=chicken&count=5`);

		const data = await api_call.json();
		this.setState({recipes: data});
		console.log(this.state.recipes)
	}
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Recipe Search</h1>
        </header>
        <Form getRecipe={this.getRecipe}/>
      </div>
    );
  }
}

export default App;
