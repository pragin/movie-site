import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: []
    }
  }

  componentWillMount() {
   this.getData(this); 
  }

  getData(){
    axios.get('http://localhost:5000/api/movies')
    .then(function(response){
      console.log(response.data);
      
    })
    .catch(function(err){
      console.log(err);
      
    });

  }
  render() {
    return (
      <div className="App">
        <header className="App-header">

          <h1 className="App-title">Hello</h1>
          <p>{this.movies}</p>
        </header>

      </div>
    );
  }
}

export default App;
