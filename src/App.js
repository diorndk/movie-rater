import React, { useState, useEffect } from 'react';
import './App.css';
import MovieList from './components/movie-list';

function App() {

  const [movies, setMovie] = useState([])

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/movies/", {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
        'Authorization': 'Token 56c7b44f49cd42aa14d9e21a50072deb098b55f2'
      }
    })
    .then(resp => resp.json())
    .then(resp => setMovie(resp))
    .catch(error => console.log(error))
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <h1>Movie Rater</h1>
      </header>
        <div className="layout">
          <MovieList movies={movies}/>
          <div>Movie Details</div>
        </div>
    </div>
  );
}

export default App;
