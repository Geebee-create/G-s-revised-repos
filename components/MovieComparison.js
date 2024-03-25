import React from 'react';
import MovieCard from './movieCard';

const MovieComparison = ({ firstAPIMovie, secondAPIMovie }) => {
    return (
        <div className="movies-container">
            <MovieCard movie={firstAPIMovie} />
            <div className="vs-box">
                <h2>VS</h2>
            </div>
            <MovieCard movie={secondAPIMovie} />
        </div>
    );
}

export default MovieComparison;