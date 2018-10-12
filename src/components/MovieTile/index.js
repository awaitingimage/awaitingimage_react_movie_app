import React, { Component } from 'react';
import './styles.css';
import {
  BASE_IMAGE_URL
} from '../../constants';

export default class MovieTile extends Component {

    render() {

        return(
            <div className={"container"}>
                <img src={BASE_IMAGE_URL+this.props.movie.poster_path} className={"image"} alt={this.props.movie.title} />
                <p>{this.props.movie.title}</p>
                <p>{this.props.movie.popularity}</p>
                <p>{this.props.movie.vote_average}</p>
                {this.props.movie.genre_ids.map((genre, index) => {
                    return (<p key={index}>{this.props.genres.find( genre2 => genre2.id === genre).name}</p>)
                })
                }
            </div>
        )
    }
}