import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux';

import Posts from './components/Posts';
import PostFrom from './components/PostForm';

import store from './store';

class App extends Component {
  render() {
    return (
      //Provider is a comp that connects react to redux
      //store holds the state
      <Provider store={store}>
        <div className="App">
          <PostFrom />
          <hr />
          <Posts />
        </div>
      </Provider>
    );
  }
}

export default App;
