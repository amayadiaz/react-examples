import React from 'react';

function CardForm(props) {
    return (
        <form onSubmit={props.onSubmit} className="card-form">
            <input onChange={props.onChange} type="text" name="message" value={props.formValues.message} />
            <input onChange={props.onChange} type="text" name="author" value={props.formValues.author} />
            <button onClick={props.onClick} type="submit">Save</button>
        </form>
    )
}

export default CardForm;