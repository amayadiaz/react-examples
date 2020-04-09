import React from 'react';

function ListForm(props) {
    return(
        <form onSubmit={props.onSubmit}>
            <input onChange={props.onChange} type="text" name="name" value={props.name} placeholder="Name" />
            <input onChange={props.onChange} type="text" name="description" value={props.description} placeholder="Description" />
            <button type="submit">Save</button>
        </form>
    )
}

export default ListForm;