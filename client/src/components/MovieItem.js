
import React, { Component } from 'react';
import {
  Card, CardImg, CardText, CardBlock, CardBody,
  CardTitle, CardSubtitle, Button, CardDeck
} from 'reactstrap';


class MovieItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const Movie = this.props.movie;
    return (
      <div>
        <CardDeck>
          <Card>
            <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
            <CardBody>
              <CardTitle>{Movie.title}</CardTitle>
              <CardSubtitle>{Movie.year}</CardSubtitle>
              <CardText>{Movie.plot}</CardText>
              <Button>Button</Button>
            </CardBody>
          </Card>
        </CardDeck>
      </div>
    );
  }
}

export default MovieItem;