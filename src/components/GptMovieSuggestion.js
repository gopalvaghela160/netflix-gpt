import React from "react";
import { useSelector } from "react-redux";

import MovieList from "./MovieList";

const GptMovieSuggestion = () => {
  const { movieName, movieResults } = useSelector((store) => store.gpt);
  if (!movieName) return null;
  return (
    <div className="p-4 m-4 bg-black text-white">
      <h1 className="text-2xl font-bold">Movies for {movieName}</h1>


          {movieName?.map((movieName, index) => (
            <MovieList
              key={movieName}
              title={movieName}
              movies={movieResults[index]}
            />
          ))}
    </div>
  );
};

export default GptMovieSuggestion;
