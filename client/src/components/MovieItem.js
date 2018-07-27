
import React, { Component } from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button,
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';

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
      <div className="movie-box" onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave}>
        <Card >
          <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
          <CardBody>
            <CardTitle>{Movie.title}</CardTitle>
            <CardSubtitle>year: {Movie.year}</CardSubtitle>
            <CardText>{Movie.plot}</CardText>
            {this.state.isMouseInside ?
              <div className="btn-wrapper">
                <Button color="danger" className="delete-btn">&times;</Button>
                <Button color="secondary" className="edit-btn"><FontAwesomeIcon icon={faEdit} /></Button>
              </div> : null}

          </CardBody>
        </Card>
      </div>
    );
  }
}

export default MovieItem;