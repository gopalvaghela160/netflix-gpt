import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => { 
  return (
    <div className="px-6 bg-transparent">
      <h1 className="text-3xl font-bold md:text-3xl py-4 text-white">
        {title}
      </h1>
      <div className="flex scroll-container">
        <div className="flex">
          {movies?.map((movie) => (
            <MovieCard key={movie.id} posterImage={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
