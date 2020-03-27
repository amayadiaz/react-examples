import React from 'react';

import Card from './Card';
import CardForm from './CardForm';

class CardContainer extends React.Component{

    state = {
        /* First Option
        author : '',
        message : '', */

        // Second Option
        form: {
            author: '',
            message: ''
        }
    }

    handleChange = e =>{
        /* First Option
        this.setState({
            [e.target.name]: e.target.value,
        })*/

        console.log(e.target.name);
        console.log(e.target.value);
        
        

        // Second Option
        this.setState({
            form:{
                // Add last form state
                ...this.state.form,
                // Add new value to form state
                [e.target.name]: e.target.value,
            }
        })

    }

    handleSubmit = e =>{
        e.preventDefault();
        console.log('Button was clicked!');
    }

    render(){
        return(
            <React.Fragment>
                {/* First Option
                <Card author={this.state.author} message={this.state.message} /> 
                <CardForm onChange={this.handleChange} onSubmit={this.handleSubmit} author={this.state.author} message={this.state.message} /> */}
                {/* Second Option */}
                <Card formValues={this.state.form} /> 
                <CardForm onChange={this.handleChange} onSubmit={this.handleSubmit} formValues={this.state.form} />
            </React.Fragment>
        )
    }

}

export default CardContainer;