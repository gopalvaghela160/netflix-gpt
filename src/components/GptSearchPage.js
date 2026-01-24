import GptMovieSuggestion from "./GptMovieSuggestion";
import GptSearchBar from "./GptSearchBar";
import BgImage from "../images/1.jpg";
const GptSearchPage = () => {
  return (
    <div>
      <div className="absolute -z-10 ">
        <img className="w-full h-full"  src={BgImage} alt="logo" />
      </div>
      <GptSearchBar />
      <GptMovieSuggestion />
    </div>
  );
};

export default GptSearchPage;
