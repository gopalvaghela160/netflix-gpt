import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/languageConstants";
import { useRef } from "react";
import client from "../utils/openai";
import { API_OPTIONS } from "../utils/constants";
import { addGptSearchResults } from "../utils/gptSlice";
const GptSearchBar = () => {
  const dispatch = useDispatch();
  const language = useSelector((store) => store.config.lang);
  const searchText = useRef(null);
  const SearchTmdbMovies = async (movie) => {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(
        movie,
      )}&include_adult=false&language=en-US&page=1`,
      API_OPTIONS,
    );

    const json = await response.json();

    return json.results;
  };

  const handleGptSearchClick = async () => {
    const query =
      " act as a movie Recommendation system and suggest some movies for the query:" +
      searchText.current.value +
      ".only give me movies of 5 movies, comma seperated like the example result given ahead.exmaple result : The Shawshank Redemption, The Godfather, The Dark Knight, Inception, Interstellar";

    const gptResult = await client.chat.send({
      model: "openai/gpt-oss-20b:free",
      messages: [{ role: "user", content: query }],
      stream: false,
    });
    if (!gptResult.choices[0].message.content) return;

    console.log(gptResult.choices[0].message.content);

    // Dilwale Dulhania Le Jayenge, Kabhi Khushi Kabhie Gham, Kal Ho Naa Ho, Jab We Met, Veer-Zaara

    const gptMovies = gptResult.choices[0].message.content
      .split(",")
      .map((m) => m.trim());

    // ["Dilwale Dulhania Le Jayenge", "Kabhi Khushi Kabhie Gham", "Kal Ho Naa Ho", "Jab We Met", "Veer-Zaara"]

    const promiseArray = gptMovies.map((movie) => SearchTmdbMovies(movie));
    const tmdbResults = await Promise.all(promiseArray);

    dispatch(
      addGptSearchResults({ movieName: gptMovies, movieResults: tmdbResults }),
    );

    console.log(tmdbResults);
  };

  return (
    <div className="pt-[10%]">
      <form
        className="w-1/2 mx-auto p-4 bg-black  grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          placeholder={lang[language].getSearchPlaceholder}
          className="col-span-9 p-4 m-4 border border-gray-300 rounded-l-md  "
        />
        <button
          className="col-span-3 m-4 px-4 py-2 bg-red-700 text-white rounded-r-md  "
          onClick={handleGptSearchClick}
        >
          {lang[language].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
