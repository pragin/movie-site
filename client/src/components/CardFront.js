import React, { Component } from 'react';
import {
  Card, CardImg, CardBody,
  CardTitle
} from 'reactstrap';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// import { faEdit } from '@fortawesome/free-solid-svg-icons';

class CardFront extends Component {
  render() {
    return (
      <div className='card-side side-front'>
        <div className='container-fluid'>
          <Card >
            <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
            <CardBody>
              <CardTitle>Title : {this.props.movie.title}</CardTitle>
              <CardTitle>year : {this.props.movie.year}</CardTitle>
            </CardBody>
          </Card>
        </div>
      </div>
    )
  }
}

export default CardFront;