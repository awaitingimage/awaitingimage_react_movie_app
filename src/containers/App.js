import React, { Component } from 'react';
import { Provider } from "react-redux";
import RootContainer from "./rootContainer";
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers';
import rootSaga from "../sagas/sagas";
import createSagaMiddleware from "redux-saga";

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

// dev tools middleware
const reduxDevTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

let store = createStore(
  rootReducer,
  compose(applyMiddleware(sagaMiddleware), reduxDevTools)
);

sagaMiddleware.run(rootSaga);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <RootContainer />
      </Provider>
    );
  }
}

export default App;
