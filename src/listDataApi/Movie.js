import React from 'react';

import './Styles.css';

function Movie(props) {

    return(
        <React.Fragment>
            <h3>{props.title} - {props.vote_average}</h3>
            <p>{props.overview}</p>
        </React.Fragment>
    );
}

export default Movie;