import React, { Component } from 'react';

export default class MovieTile extends Component {
    render() {
        return(
            <div>
            <p>{this.props.movie.title}</p>
            <img src={'https://image.tmdb.org/t/p/w500/'+this.props.movie.poster_path} />
            </div>
        )
    }
}