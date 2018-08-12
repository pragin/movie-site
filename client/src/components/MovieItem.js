
import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import '../css/flip-card.css';
import CardFront from './CardFront.js';
import CardBack from './CardBack.js';

class MovieItem extends Component {
  constructor() {
    super();
    this.state = {
      isMouseInside: false
    };
    this.mouseEnter = this.mouseEnter.bind(this);
    this.mouseLeave = this.mouseLeave.bind(this);
  }

  mouseEnter() {
    this.setState({ isMouseInside: true });
  }

  mouseLeave() {
    this.setState({ isMouseInside: false });
  }

  showButtons() {
    return (
      <div>
        <Button color="danger" className="delete-btn">X</Button>
        <Button color="secondary" className="edit-btn"><FontAwesomeIcon icon={faEdit} /></Button>
      </div>
    );
  }

  render() {
    const Movie = this.props.movie;
    return (
      <div className="card-container" onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave}>
        <div className="box-body">
          <CardFront movie={Movie} />
          <CardBack movie={Movie} />
        </div>
      </div>
    );
  }
}

export default MovieItem;