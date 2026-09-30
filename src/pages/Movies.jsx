import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import MovieModal from "../components/MovieModal";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Movies() {
const [movies, setMovies] = useState([]);
const [search, setSearch] = useState("");
const [selectedMovie, setSelectedMovie] = useState(null);
const [loading, setLoading] = useState(true);
const [error, setError] = useState("");
  useEffect(() => {
  fetch("https://api.tvmaze.com/shows")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to load shows");
      }

      return response.json();
    })
    .then((data) => {
      setMovies(data);
      setLoading(false);
    })
    .catch(() => {
      setError("Something went wrong. Please try again.");
      setLoading(false);
    });
}, []);

 useEffect(() => {
  if (search === "") {
    return;
  }

  setLoading(true);

  fetch(`https://api.tvmaze.com/search/shows?q=${search}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Search failed");
      }

      return response.json();
    })
    .then((data) => {
      const searchResults = data.map((item) => item.show);
      setMovies(searchResults);
      setLoading(false);
    })
    .catch(() => {
      setError("Something went wrong. Please try again.");
      setLoading(false);
    });
}, [search]);
  return (
  <div className="movies-page">
    <Navbar />

    <h1>Movie Listing Page</h1>

      <p>Total Shows: {movies.length}</p>

      <div className="search-box">
        <input
          type="text"
          placeholder="🔍 Search for a movie..."
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />
      </div>
{loading && <p className="status-message">Loading...</p>}

{error && <p className="status-message">{error}</p>}
      <div className="movie-grid">
  {movies.map((movie) => (
    <MovieCard
      key={movie.id}
      movie={movie}
      onDetails={setSelectedMovie}
    />
  ))}
</div>

{selectedMovie && (
  <MovieModal
    movie={selectedMovie}
    onClose={() => setSelectedMovie(null)}
  />
)}

<Footer />
</div>
);
}

export default Movies;