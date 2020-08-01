import React from 'react';

/* Components */
import Search from './Search';
import Nav from './Nav';
import PhotoContainer from './PhotoContainer';
import apiKey from './config';

const api = apiKey;
console.log(api); //delete this it works


function App() {
  return (
    <div className="container">
      <Search />
      <Nav />
      <PhotoContainer />

    </div>
  );
}

export default App;
