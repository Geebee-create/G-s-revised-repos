import React from 'react';
import Card from 'react-bootstrap/Card';
// import MovieComparison from './MovieComparison';

const MovieCard = ({ movie }) => {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={movie.posterUrl} alt={movie.title} />
            <Card.Body>
                <Card.Title>{movie.title}</Card.Title>
            </Card.Body>
        </Card>
    );
}

export default MovieCard;