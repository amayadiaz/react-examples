import React from 'react';

import Movie from './Movie';

function MoviesList(props) {
    
    const data = props.data;
    
    return(
        <React.Fragment>
            {data.map(movie =>{
                return(
                    <div className="movie" key={movie.id}>
                        <Movie title={movie.title} vote_average={movie.vote_average} overview={movie.overview} />
                    </div>
                )
            })}
        </React.Fragment>
    )
}

export default MoviesList;