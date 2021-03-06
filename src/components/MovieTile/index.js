import React, { Component } from "react";
import "./styles.css";
import { BASE_IMAGE_URL } from "../../constants";
import { Badge } from "reactstrap";
import { LazyLoadImage } from "react-lazy-load-image-component";

export default class MovieTile extends Component {
  render() {
    return (
      <div className={"container"}>
        <LazyLoadImage
          src={BASE_IMAGE_URL + this.props.movie.poster_path}
          className={"image"}
          alt={this.props.movie.title}
        />
        <p>
          <b>{this.props.movie.title}</b>
        </p>
        <p>average rating: {this.props.movie.vote_average}</p>
        {this.props.movie.genre_ids.map((genre, index) => {
          try {
            return (
              <Badge color="info" pill key={index}>
                {this.props.genres.find(genre2 => genre2.id === genre).name}
              </Badge>
            );
          } catch {
            return null;
          }
        })}
      </div>
    );
  }
}
