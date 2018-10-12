// action types
export const GENRE_API_CALL_REQUEST = "GENRE_API_CALL_REQUEST";
export const GENRE_API_CALL_SUCCESS = "GENRE_API_CALL_SUCCESS";
export const GENRE_API_CALL_FAILURE = "GENRE_API_CALL_FAILURE";
export const MOVIE_API_CALL_REQUEST = "MOVIE_API_CALL_REQUEST";
export const MOVIE_API_CALL_SUCCESS = "MOVIE_API_CALL_SUCCESS";
export const MOVIE_API_CALL_FAILURE = "MOVIE_API_CALL_FAILURE";
export const SET_GENRE_SELECTION = "SET_GENRE_SELECTION";
export const SET_RATING_SELECTION = "SET_RATING_SELECTION";

// actions
export const fetchMovieGenres = () => ({
  type: GENRE_API_CALL_REQUEST
});
export const fetchMovieGenresSuccess = genres => ({
  type: GENRE_API_CALL_SUCCESS,
  genres
});
export const fetchMovieGenresFailure = error => ({
  type: GENRE_API_CALL_FAILURE,
  error
});
export const fetchMovies = () => ({
  type: MOVIE_API_CALL_REQUEST
});
export const fetchMoviesSuccess = movies => {
  movies.sort((a, b) => (a.popularity >= b.popularity ? -1 : 1));
  return {
    type: MOVIE_API_CALL_SUCCESS,
    movies
  };
};
export const fetchMoviesFailure = error => ({
  type: MOVIE_API_CALL_FAILURE,
  error
});
export const setMovieGenres = genres => {
  const genreIds = genres.map(genre => {
    return genre.value;
  });
  return {
    type: SET_GENRE_SELECTION,
    genreIds
  };
};
export const setSelectedRating = rating => ({
  type: SET_RATING_SELECTION,
  rating
});

// reducer with initial state
const initialState = {
  genres: [],
  movies: [],
  selectedGenres: [],
  selectedRating: [3, 10]
};

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case MOVIE_API_CALL_REQUEST:
      return { ...state, movieFetching: true, error: null };
    case MOVIE_API_CALL_SUCCESS:
      return { ...state, movies: action.movies };
    case MOVIE_API_CALL_FAILURE:
      return {
        ...state,
        movieFetching: false,
        movies: [],
        error: action.error
      };
    case GENRE_API_CALL_REQUEST:
      return { ...state, genreFetching: true, error: null };
    case GENRE_API_CALL_SUCCESS:
      return { ...state, genres: action.genres };
    case GENRE_API_CALL_FAILURE:
      return {
        ...state,
        genreFetching: false,
        genres: [],
        error: action.error
      };
    case SET_GENRE_SELECTION:
      return { ...state, selectedGenres: action.genreIds };
    case SET_RATING_SELECTION:
      return { ...state, selectedRating: action.rating };
    default:
      return state;
  }
};

export default movieReducer;
