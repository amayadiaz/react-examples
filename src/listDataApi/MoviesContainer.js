import React from 'react';

import MoviesList from './MoviesList';

class MoviesContainer extends React.Component{

    state = {
        data: [],
    }

    componentDidMount(){
        this.fetchData();
    }

    fetchData = async () => {


        fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=84ff3251498b1fa0b9f22832083b3196`)
        .then(response => {
            return response.json();
        })
        .then(data => {

            this.setState({ data: data.results });
            
        })
        .catch(error => console.log(error));
    }

    render(){
        return (
            <MoviesList data={this.state.data} />
        );
    }
}

export default MoviesContainer;