import React, { Component } from 'react';
import './RootContainerStyles.css';
import { connect } from "react-redux";
import ReactMultiSelectCheckboxes from 'react-multiselect-checkboxes';
import MovieTile from '../../components/MovieTile';
import { Container, Row, Col } from 'reactstrap';
import Select from 'react-select';

class RootContainer extends Component {

  constructor(props){
    super(props);
    this.props.onRequestGenre();
    this.props.onRequestMovie();
  }

  state = {
    selectedOption: null,
  }

  handleChange = (selectedOption) => {
    this.setState({ selectedOption });
  }

  render() {
      const { genres, movies, error } = this.props;
      const options = [
        { label: 'Thing 1', value: 1},
        { label: 'Thing 2', value: 2},
      ];
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
              return (<Col xs="6" sm="4"><MovieTile movie={movie}/></Col>)
          }
          )}
          </Row>
          </Container>
          {error && <p style={{ color: "red" }}>Uh oh - something went wrong!</p>}
  
        </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    genres: state.movieReducer.genres,
    movies: state.movieReducer.movies
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onRequestGenre: () => dispatch({ type: "GENRE_API_CALL_REQUEST" }),
    onRequestMovie: () => dispatch({ type: "MOVIE_API_CALL_REQUEST" }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RootContainer);
