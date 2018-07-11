import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';


export default class Movies extends Component {
    render() {
        const movies = this.props.movies;
        return (
            movies.map(movie => {
                return (
                    <Grid>
                        <Row className="show-grid">
                    <Col md={6} lg={3}>
                        <div className="movie-box">
                            <div className="movie-img">
                            </div>
                            <div className="details">
                                <ul>
                                    <li key={movie._id}>
                                        {movie.title}<br />
                                        {movie.year}<br />
                                        {movie.director}<br />
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </Col>
                    </Row>
                    </Grid>

                );
            })
        )
    }


}