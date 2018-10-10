import movieSaga from './movieSaga';
/**
 * Configure App's sagas
 */
export default (sagaMiddleware) => {
  sagaMiddleware.run(movieSaga);
};
