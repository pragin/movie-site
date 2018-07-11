

import { Grid, Row } from 'react-bootstrap';
import {
  Navbar,
  Nav,
  NavItem,
  NavDropdown,
  MenuItem  } from 'react-bootstrap';
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
        <Navbar inverse collapseOnSelect>
         <Navbar.Header>
          <Navbar.Brand>
            <a href="#brand">Movie Site</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
        <Nav>
          <NavItem eventKey={1} href="#">
            Link
          </NavItem>
          <NavItem eventKey={2} href="#">
            Link
          </NavItem>
          <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
            <MenuItem eventKey={3.1}>Action</MenuItem>
            <MenuItem eventKey={3.2}>Another action</MenuItem>
            <MenuItem eventKey={3.3}>Something else here</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey={3.3}>Separated link</MenuItem>
          </NavDropdown>
        </Nav>
        <Nav pullRight>
          <NavItem eventKey={1} href="#">
            SignIn
          </NavItem>
          
        </Nav>
      </Navbar.Collapse>
    </Navbar>;
        
          <Grid>
            <Row className="show-grid">
              
                <Movies movies={this.state.movies} />
            
              
            </Row>
          </Grid>
       
      </div>
    );
  }
}

export default App;
