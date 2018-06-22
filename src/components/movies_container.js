import React, { Component } from "react";
import Movies from './movies';
import axios from 'axios';

class MoviesContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: []
        }
    }


    componentWillMount() {
        const ITUNES_URL = 'http://ax.itunes.apple.com/WebObjects/MZStoreServices.woa/ws/RSS/topMovies/json';
        axios.get((`${ITUNES_URL} `)).then(response => {
            console.log("response", response);
            this.setState({
                movies: response.data.feed.entry
            })
        })
    }


    render() {
        console.log(this.state);
        const movieList = this.state.movies.map((movieinfo, index) => {
            return < Movies info={movieinfo} key={index}/>
        });

        return (
            <div>
               {movieList}
            </div>
        )

    }
}

export default MoviesContainer;