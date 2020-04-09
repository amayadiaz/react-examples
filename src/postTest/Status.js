import React from 'react';

function Status(props) {
    return(
        <h3>{props.statusMessage} - List ID: {props.listId}</h3>
    )
}

export default Status;