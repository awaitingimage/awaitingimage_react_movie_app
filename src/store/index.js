/* eslint no-underscore-dangle: ["error", { "allow": ["__REDUX_DEVTOOLS_EXTENSION_COMPOSE__"] }] */
import { createStore, applyMiddleware, compose } from "redux";
import { createLogger } from "redux-logger";
import createSagaMiddleware from "redux-saga";
import rootReducer from "../reducers";
import runSagasRoot from "../sagas";

const initialState = {};
const sagaMiddleware = createSagaMiddleware();

export default (debug = false) => {
  const composeEnhancers =
    (debug && global.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
  const middleware = [sagaMiddleware];

  if (debug) {
    middleware.push(createLogger());
  }

  const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(sagaMiddleware))
  );

  runSagasRoot(sagaMiddleware);

  return store;
};
