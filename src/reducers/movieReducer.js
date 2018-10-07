// action types
const GENRE_API_CALL_REQUEST = "GENRE_API_CALL_REQUEST";
const GENRE_API_CALL_SUCCESS = "GENRE_API_CALL_SUCCESS";
const GENRE_API_CALL_FAILURE = "GENRE_API_CALL_FAILURE";
const MOVIE_API_CALL_REQUEST = "MOVIE_API_CALL_REQUEST";
const MOVIE_API_CALL_SUCCESS = "MOVIE_API_CALL_SUCCESS";
const MOVIE_API_CALL_FAILURE = "MOVIE_API_CALL_FAILURE";

// reducer with initial state
const initialState = {
  genres: [],
  movies: []
};

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case MOVIE_API_CALL_REQUEST:
      return { ...state, movieFetching: true, error: null };
    case MOVIE_API_CALL_SUCCESS:
      return { ...state, movies: action.movies };
    case MOVIE_API_CALL_FAILURE:
      return { ...state, movieFetching: false, movies: [], error: action.error };
    case GENRE_API_CALL_REQUEST:
      return { ...state, genreFetching: true, error: null };
    case GENRE_API_CALL_SUCCESS:
      return { ...state, genres: action.genres };
    case GENRE_API_CALL_FAILURE:
      return { ...state, genreFetching: false, genres: [], error: action.error };
    default:
      return state;
  }
};

export default movieReducer;