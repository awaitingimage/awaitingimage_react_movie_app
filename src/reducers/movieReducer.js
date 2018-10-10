// action types
export const GENRE_API_CALL_REQUEST = "GENRE_API_CALL_REQUEST";
export const GENRE_API_CALL_SUCCESS = "GENRE_API_CALL_SUCCESS";
export const GENRE_API_CALL_FAILURE = "GENRE_API_CALL_FAILURE";
export const MOVIE_API_CALL_REQUEST = "MOVIE_API_CALL_REQUEST";
export const MOVIE_API_CALL_SUCCESS = "MOVIE_API_CALL_SUCCESS";
export const MOVIE_API_CALL_FAILURE = "MOVIE_API_CALL_FAILURE";
export const SET_GENRE_SELECTION = "SET_GENRE_SELECTION";

// reducer with initial state
const initialState = {
  genres: [],
  movies: [],
  selectedGenres: []
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
    case SET_GENRE_SELECTION:
      return { ...state, selectedGenres: action.genres}
    default:
      return state;
  }
};

export default movieReducer;