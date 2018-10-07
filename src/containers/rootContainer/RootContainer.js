import React, { Component } from 'react';
import './RootContainerStyles.css';
import { connect } from "react-redux";

class RootContainer extends Component {

  constructor(props){
    super(props);
    this.props.onRequestGenre();
    this.props.onRequestMovie();
  }

  render() {
      const { error } = this.props;
      return (
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Welcome to Movie DB</h1>
          </header>
  
          {error && <p style={{ color: "red" }}>Uh oh - something went wrong!</p>}
  
        </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onRequestGenre: () => dispatch({ type: "GENRE_API_CALL_REQUEST" }),
    onRequestMovie: () => dispatch({ type: "MOVIE_API_CALL_REQUEST" })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RootContainer);
