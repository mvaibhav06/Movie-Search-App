import React from "react";

const Movie = ({ movie }) => {
  let image = movie.Poster;

  if (image === "N/A") {
    image =
      "https://m.media-amazon.com/images/M/MV5BNjI1Yjk3NWUtOGU1My00NjA0LWEwNDQtOTNlMWFmYzE5NzljXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg";
  }

  return (
    <div className="card my-2" style={{ width: "18rem" }}>
      <img src={image} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="text-center">{movie.Title}</h5>
        <p style={{ marginBottom: "0px" }} className="text-center">
          ({movie.Year})
        </p>
      </div>
    </div>
  );
};

export default Movie;
