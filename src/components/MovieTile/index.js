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
            </div>
        )
    }
}