import React from 'react';

import ListForm from './ListForm';

import Status from './Status';

class ListFormContainer extends React.Component{

    state = {
        name: '',
        description: '',
        // statusSuccess: false,
        statusMessage: '',
        listId: '',
    }

    handleChange = e =>{

        this.setState({
            [e.target.name]: e.target.value,
        })

    }

    handleSubmit = e => {
        
        e.preventDefault();

        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({
                name: this.state.name,
                description: this.state.description
            })
        }

        fetch('https://api.themoviedb.org/3/list?api_key=84ff3251498b1fa0b9f22832083b3196&ses_id=d217f830973bd1969b0dae79694b05e34c193716', requestOptions)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            this.setState({
                name: '',
                description: '',
                statusSuccess: data.success,
                statusMessage: data.status_message,
                listId: data.list_id
            })
        });

    }


    render(){

        if(this.state.statusSuccess){
            return(
                <React.Fragment>
                    <ListForm onSubmit={this.handleSubmit} onChange={this.handleChange} name={this.state.name} description={this.state.description} />
                    <Status statusMessage={this.state.statusMessage} listId={this.state.listId} />
                </React.Fragment>
            )
        }else{
            return(
                <ListForm onSubmit={this.handleSubmit} onChange={this.handleChange} name={this.state.name} description={this.state.description} />
            )
        }
    }
}

export default ListFormContainer;