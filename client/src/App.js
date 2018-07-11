

import { Grid, Row, Col } from 'react-bootstrap';
import React, { Component } from 'react';
import Movies from './components/Movies';
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
        <header className="App-header">
          <h1 className="App-title">Movie Site</h1>
          <Grid>
            <Row className="show-grid">
              <Movies movies={this.state.movies} />
            </Row>
          </Grid>
        </header>
      </div>
    );
  }
}

export default App;
