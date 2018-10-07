import { takeLatest, call, put, all } from "redux-saga/effects";
import axios from "axios";

// watcher saga: watches for actions dispatched to the store, starts worker saga
export function* watcherSaga() {
  yield takeLatest("GENRE_API_CALL_REQUEST", workerGenre);
  yield takeLatest("MOVIE_API_CALL_REQUEST", workerMovie);
}

// function that makes the api request and returns a Promise for response
function fetchGenres() {
  return axios({
    method: "get",
    url: "https://api.themoviedb.org/3/genre/movie/list?api_key=73b77536b2471b0b93f5e4583c976ba7&language=en-US"
  });
}

// function that makes the api request and returns a Promise for response
function fetchMovies() {
  return axios({
    method: "get",
    url: "https://api.themoviedb.org/3/movie/now_playing?api_key=73b77536b2471b0b93f5e4583c976ba7&language=en-US&page=1"
  });
}

// worker saga: makes the api call when watcher saga sees the action
function* workerGenre() {
  try {
    const response = yield call(fetchGenres);
    const genres = response.data.genres;

    // dispatch a success action to the store with the new dog
    yield put({ type: "GENRE_API_CALL_SUCCESS", genres });
  
  } catch (error) {
    // dispatch a failure action to the store with the error
    yield put({ type: "GENRE_API_CALL_FAILURE", error });
  }
}

// worker saga: makes the api call when watcher saga sees the action
function* workerMovie() {
  try {
    const response = yield call(fetchMovies);
    const movies = response.data.results;

    // dispatch a success action to the store with the new dog
    yield put({ type: "MOVIE_API_CALL_SUCCESS", movies });
  
  } catch (error) {
    // dispatch a failure action to the store with the error
    yield put({ type: "MOVIE_API_CALL_FAILURE", error });
  }
}