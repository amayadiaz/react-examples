import React from 'react';

import MoviesList from './MoviesList';


class MoviesContainer extends React.Component{

    state = {
        data: [],
        error: null,
        loading: false
    }

    componentDidMount(){
        this.fetchData();
    }

    fetchData = async () => {

        this.setState({ loading: true });

        fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=84ff3251498b1fa0b9f22832083b3196`)
        .then(response => {
            return response.json();
        })
        .then(data => {
            this.setState({ data: data.results, loading: false });
        })
        .catch(error => console.error(error));

    }

    render(){

        if (this.state.loading) {
            return <h3>Loading ...</h3>;
        }
    
        if (this.state.data.length > 0) {
            return (
                <MoviesList data={this.state.data} />
            ); 
        }else{
            return <h3>No data available</h3>;
        }
        
    }
}

export default MoviesContainer;