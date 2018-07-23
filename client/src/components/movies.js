import React, { Component } from 'react';
import { Row, Col, Container, CardDeck } from 'reactstrap';

import MovieItem from './MovieItem';

class Movies extends Component {
	render() {
		let MovieItems;
		if (this.props.movies) {
			MovieItems = this.props.movies.map(movie => {
				return (
					<Col sm="6" md="4" lg="2" key={movie._id} >
					<CardDeck key={movie._id}>
						<MovieItem key={movie._id} movie={movie} />
						</CardDeck>
					</Col>
				)
			})
		}
		return (
			<Container fluid>
				<Row>
					{MovieItems}
				</Row>
			</Container >
		);
	}


}

export default Movies;