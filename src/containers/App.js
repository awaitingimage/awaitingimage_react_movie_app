import React, { Component } from 'react';
import { Provider } from "react-redux";
import RootContainer from "./rootContainer";
import configStore from '../store';

const debug = process.env.NODE_ENV === 'development';
const store = configStore(debug);

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
