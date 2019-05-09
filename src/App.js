import React from 'react';
import './App.css';

import Posts from './components/Posts';
import PostFrom from './components/PostForm';

function App() {
  return (
    <div className="App">
      <PostFrom />
      <hr />
      <Posts />
    </div>
  );
}

export default App;
