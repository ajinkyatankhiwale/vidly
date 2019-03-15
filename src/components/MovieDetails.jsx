import React from "react";

const MovieDetails = ({ match, history }) => {
  return (
    <div>
      <span>Movie {match.params.id}</span>
      <button
        className="btn btn-primary"
        onClick={() => history.push("/movies")}
      >
        Save
      </button>
    </div>
  );
};

export default MovieDetails;
