import React from 'react';
import './App.css';
import './bootstrapminty.min.css'
import Recipe from './components/Recipe.js'



class App extends React.Component {
  constructor(){
    super();
    this.state={
      Results:[],
	    search:"",
    }
    this.handleSearch=this.handleSearch.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this);
    
  }
      handleSearch(e){
		this.setState({search:e.target.value});
      }
      handleSubmit(e){
		  e.preventDefault();
		  console.log("Query : "+this.state.search);
        const APP_ID='ee652662';
        const APP_KEY='8f3d0a7d6f37abfece70919ac2ea75a9';
        fetch(`https://api.edamam.com/search?q=${this.state.search}&app_id=${APP_ID}&app_key=${APP_KEY}`)
          .then(response => response.json())
          .then(data => {
			this.setState({Results:data.hits});
			console.log(this.state.Results)
          });
        
      }
  render(){
    
    return (
      <div className="container-fliud main">
        <div className="jumbotron m-0">
        <h1 className="page-header">Recipe Search</h1>
        <form className="row p-3">
        <input type="text" className="form-control col-sm-7 mr-1" onChange={this.handleSearch} placeholder="Search for your favourite food"></input>
        <button onClick={this.handleSubmit}  className="btn btn-danger btn-sm col-sm-3 ml-1">Get Recipe</button>
        </form>
        <p className="lead"><a href="https://github.com/kiranpuli/RecipeSearch/" className="btn btn-info">CODE</a> available on github</p>
        </div>
        <div className="container-fluid results p-3">
          
          {this.state.Results.map(function(item){
            return(
              <Recipe key={item.recipe.label} item={item.recipe}/>
            )
          })}
        </div>
      </div>
    )
  }
}

export default App;
