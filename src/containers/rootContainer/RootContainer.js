import React, { Component } from "react";
import "./RootContainerStyles.css";
import { connect } from "react-redux";
import MovieTile from "../../components/MovieTile";
import { Container, Row, Col } from "reactstrap";
import Select from "react-select";
import {
  fetchMovieGenres,
  fetchMovies,
  setMovieGenres,
  setSelectedRating
} from "../../reducers/movieReducer";
import { Range } from "rc-slider";
import "rc-slider/assets/index.css";

class RootContainer extends Component {
  constructor(props) {
    super(props);
    this.props.fetchMovieGenres();
    this.props.fetchMovies();
  }

  state = {
    selectedOption: []
  };

  handleChange = selectedOption => {
    this.props.setMovieGenres(selectedOption);
    this.setState({ selectedOption });
  };

  handleSliderChange = rating => {
    this.props.setSelectedRating(rating);
  };

  render() {
    const { genres, movies, selectedGenres, selectedRating } = this.props;
    const genreOptions = genres.map(genre => {
      return { label: genre.name, value: genre.id };
    });

    return (
      <div className="App">
        <p>Testing automated deployment!</p>
        <Select
          value={this.state.selectedOption}
          onChange={this.handleChange}
          options={genreOptions}
          isMulti
        />
        <div className={"range"}>
          <Range
            min={0}
            max={10}
            step={0.5}
            defaultValue={[3, 10]}
            onChange={this.handleSliderChange}
          />
        </div>
        <Container>
          <Row>
            {movies.map((movie, index) => {
              const genreOverlap = movie.genre_ids.filter(value =>
                selectedGenres.includes(value)
              );
              if (
                (selectedGenres.length === 0 || genreOverlap.length > 0) &&
                (selectedRating[0] < movie.vote_average &&
                  selectedRating[1] > movie.vote_average)
              )
                return (
                  <Col xs="6" sm="4" key={index}>
                    <MovieTile movie={movie} genres={genres} />
                  </Col>
                );
              return null;
            })}
          </Row>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = ({ movieReducer }) => {
  return {
    genres: movieReducer.genres,
    movies: movieReducer.movies,
    selectedGenres: movieReducer.selectedGenres,
    selectedRating: movieReducer.selectedRating
  };
};

const mapDispatchToProps = {
  fetchMovieGenres,
  fetchMovies,
  setMovieGenres,
  setSelectedRating
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RootContainer);
