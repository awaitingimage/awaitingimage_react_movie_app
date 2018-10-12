import React, { Component } from 'react';
import './RootContainerStyles.css';
import { connect } from "react-redux";
import MovieTile from '../../components/MovieTile';
import { Container, Row, Col } from 'reactstrap';
import Select from 'react-select';
import { fetchMovieGenres, fetchMovies, setMovieGenres } from '../../reducers/movieReducer';

class RootContainer extends Component {

  constructor(props){
    super(props);
    this.props.fetchMovieGenres();
    this.props.fetchMovies();
  }

  state = {
    selectedOption: [],
  }

  handleChange = (selectedOption) => {
    this.props.setMovieGenres(selectedOption);
    this.setState({ selectedOption });
    
  }

  render() {
      const { genres, movies, error } = this.props;
      const genreOptions = genres.map(genre => {
        return({label: genre.name, value: genre.id})
      });
      
      return (
        <div className="App">
          <Select
        value={this.state.selectedOption}
        onChange={this.handleChange}
        options={genreOptions}
        isMulti
      />
          <Container>
            <Row>
          {movies.map((movie, index) => {
            const genreOverlap = movie.genre_ids.filter(value => this.props.selectedGenres.includes(value))
            if (this.props.selectedGenres.length === 0 || genreOverlap.length > 0)
              return (<Col xs="6" sm="4" key={index}><MovieTile movie={movie} genres={this.props.genres}/></Col>)
            return null
          }
          )}
          </Row>
          </Container>
          {error && <p style={{ color: "red" }}>Uh oh - something went wrong!</p>}
  
        </div>
    );
  }
}

const mapStateToProps = ({movieReducer}) => {
  return {
    genres: movieReducer.genres,
    movies: movieReducer.movies,
    selectedGenres: movieReducer.selectedGenres
  };
};

const mapDispatchToProps = {
    fetchMovieGenres,
    fetchMovies,
    setMovieGenres
}

export default connect(mapStateToProps, mapDispatchToProps)(RootContainer);
