import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  return (
    movies.nowPlayingMovies && (
      <div className="pl-6 bg-black">
        <div className="-mt-40 relative z-100">
          <MovieList
            title={"Now Playing movies"}
            movies={movies?.nowPlayingMovies}
          />

          <MovieList title={"popular movies"} movies={movies?.popularMovies} />
          <MovieList
            title={"Top Rated movies"}
            movies={movies?.topRatedMovies}
          />
          <MovieList
            title={"Upcoming movies"}
            movies={movies?.upComingMovies}
          />
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;
