import { takeLatest, put, all } from "redux-saga/effects";
import axios from "axios";
import {
  API_KEY,
  BASE_URL,
  API_GENRE_FETCH,
  API_MOVIES_FETCH
} from "../constants";
import {
  GENRE_API_CALL_REQUEST,
  MOVIE_API_CALL_REQUEST,
  fetchMovieGenresSuccess,
  fetchMovieGenresFailure,
  fetchMoviesSuccess,
  fetchMoviesFailure
} from "../reducers/movieReducer";

export function* getMovieGenres() {
  try {
    const response = yield axios({
      method: "get",
      baseURL: BASE_URL,
      url: API_GENRE_FETCH,
      params: { api_key: API_KEY }
    });
    const genres = response.data.genres;
    // dispatch a success action to the store with the new dog
    yield put(fetchMovieGenresSuccess(genres));
  } catch (error) {
    // dispatch a failure action to the store with the error
    yield put(fetchMovieGenresFailure(error));
  }
}

export function* getMovies() {
  try {
    const response = yield axios({
      method: "get",
      baseURL: BASE_URL,
      url: API_MOVIES_FETCH,
      params: { api_key: API_KEY }
    });
    const movies = response.data.results;
    // dispatch a success action to the store with the new dog
    yield put(fetchMoviesSuccess(movies));
  } catch (error) {
    // dispatch a failure action to the store with the error
    yield put(fetchMoviesFailure(error));
  }
}

export default function* rootSaga() {
  yield all([
    takeLatest(GENRE_API_CALL_REQUEST, getMovieGenres),
    takeLatest(MOVIE_API_CALL_REQUEST, getMovies)
  ]);
}
