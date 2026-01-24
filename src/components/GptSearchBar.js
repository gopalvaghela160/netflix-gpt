import { useSelector } from "react-redux";
import lang from "../utils/languageConstants";
const GptSearchBar = () => {
  const language = useSelector((store) => store.config.lang);

  return (
    <div className="pt-[10%]">
      <form className="w-1/2 mx-auto p-4 bg-black  grid grid-cols-12">
        <input
          type="text"
          placeholder={lang[language].getSearchPlaceholder}
          className="col-span-9 p-4 m-4 border border-gray-300 rounded-l-md  "
        />
        <button className="col-span-3 m-4 px-4 py-2 bg-red-700 text-white rounded-r-md  ">
          {lang[language].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
