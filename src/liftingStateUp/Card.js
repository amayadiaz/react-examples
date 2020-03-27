import React from 'react';

function Card(props) {
    return(
        <div>
            <h3>Message - {props.formValues.message}</h3>
            <p>By - {props.formValues.author}</p>
        </div>
    )
}

export default Card;