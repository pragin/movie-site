import React, { Component } from 'react';
import {
  Card,  CardBody, CardText,
} from 'reactstrap';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// import { faEdit } from '@fortawesome/free-solid-svg-icons';

class CardBack extends Component {
  render() {
    return (
      <div className='card-side side-back'>
        {/* <div className='container-fluid aaa'> */}
          <Card >
            <CardBody className="cardBack-body">
              <CardText>Director : {this.props.movie.director ? this.props.movie.director : "N/A"}</CardText>
              <CardText>Plot : {this.props.movie.plot ? this.props.movie.plot : "N/A"}</CardText>
            </CardBody>
          </Card>
       {/* </div> */}
       </div>
    )
  }
}

export default CardBack;