import React, { Component } from 'react';
import Movies from './components/Movies';
import AppNavbar from './components/AppNavbar';
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: []
    }
    this.getData = this.getData.bind(this);
  }

  componentWillMount() {
    console.log("componentWillMount");
    this.getData(this);
  }

  getData(obj) {
    axios.get('/api/movies')
      .then(function (response) {
        obj.setState({ movies: response.data })
      })
      .catch(function (err) {
        console.log(err);
      });
  }


  render() {
    return (
      <div className="App">
        <AppNavbar />
        <Movies movies={this.state.movies} />
      </div>
    );
  }
}

export default App;
