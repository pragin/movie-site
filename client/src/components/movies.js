import React, { Component } from 'react';
import { Row, Col, Container } from 'reactstrap';

import MovieItem from './MovieItem';

class Movies extends Component {
	render() {
		let MovieItems;
		if (this.props.movies) {
			MovieItems = this.props.movies.map(movie => {
				return (
					<Col sm="2" >
						<MovieItem movie={movie} />
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