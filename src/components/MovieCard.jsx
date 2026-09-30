function MovieCard({ movie, onDetails }) {
  return (
    <div className="movie-card">
      <img
        src={movie.image?.medium}
        alt={movie.name}
      />

      <div className="movie-card-content">
        <h3>{movie.name}</h3>

        <p>⭐ {movie.rating?.average || "N/A"}</p>

        <p>
          📅 {movie.premiered ? movie.premiered.substring(0, 4) : "N/A"}
        </p>

        <button onClick={() => onDetails(movie)}>
          See Details
        </button>
      </div>
    </div>
  );
}

export default MovieCard;