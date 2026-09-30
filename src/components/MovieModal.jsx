function MovieModal({ movie, onClose }) {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <button className="close-button" onClick={onClose}>
          ✕
        </button>

        <img
          src={movie.image?.original || movie.image?.medium}
          alt={movie.name}
        />

        <div className="modal-content">
          <h2>{movie.name}</h2>

          <p>⭐ Rating: {movie.rating?.average || "N/A"}</p>

          <p>
            📅 Release: {movie.premiered || "N/A"}
          </p>

          <p>
            Genre: {movie.genres?.join(", ") || "N/A"}
          </p>

          <h3>Overview:</h3>

          <div
            dangerouslySetInnerHTML={{
              __html: movie.summary || "No summary available.",
            }}
          />

          <button className="close-modal-button" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default MovieModal;