import { useState } from 'react'
import './App.css'

function MovieInputArea(props) {
  // initialize as empty strings to avoid uncontrolled input warnings
  const [movieName, setMovieName] = useState('');
  const [movieRating, setMovieRating] = useState('');
  const [movieReview, setMovieReview] = useState('');

  const setter = props.setter;

  function postMovie(setter) {
    if (!movieName) return; // basic guard
    setter((prevMovies) => [
      ...prevMovies,
      { title: movieName, rating: movieRating, review: movieReview },
    ]);
    // clear inputs after posting
    setMovieName('');
    setMovieRating('');
    setMovieReview('');
  }

  return (
    <div className="input-area">
      <div className="form-row">
        <label htmlFor="movieName">Movie Name</label>
        <input
          id="movieName"
          className="text-input"
          value={movieName}
          placeholder="Enter Name"
          onChange={(e) => setMovieName(e.target.value)}
        />
      </div>
      <div className="form-row">
        <label htmlFor="movieRating">Rating</label>
        <input
          id="movieRating"
          className="text-input"
          value={movieRating}
          placeholder="Enter Rating"
          onChange={(e) => setMovieRating(e.target.value)}
        />
      </div>
      <div className="form-row">
        <label htmlFor="movieReview">Movie Review</label>
        <textarea
          id="movieReview"
          className="text-area"
          value={movieReview}
          placeholder="Write Review"
          onChange={(e) => setMovieReview(e.target.value)}
        />
      </div>
      <div className="form-row">
        <button className="primary" onClick={() => postMovie(setter)}>Post</button>
      </div>
    </div>
  );
}

function MovieArea(props) {
  const movies = props.movies;

  return (
    <div className="movie-list">
      {movies.map((movie, idx) => (
        <MovieCard key={idx} name={movie.title} rating={movie.rating} review={movie.review} />
      ))}
    </div>
  );
}



function MovieCard(props) {
  const movieName = props.name;
  const movieRating = props.rating;
  const movieReview = props.review;

  return (
    <div className="movie-card">
      <h3 className="movie-title">{movieName}</h3>
      <p className="movie-rating">Rating: {movieRating}</p>
      <p className="movie-review">{movieReview}</p>
    </div>
  );
}

export default function App() {
  const [movies, setMovies] = useState([{ title: "interstellar", rating: 5, review: "hella good" },]);
  return (
    <div className="App">
      <MovieInputArea setter={setMovies} />
      <MovieArea movies={movies} />
    </div>
  );
}