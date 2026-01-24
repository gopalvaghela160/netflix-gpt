import React from "react";
import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ posterImage }) => {
  return (
    <div className="w-48 pr-4">
      <img
        src={IMG_CDN_URL + posterImage}
        alt="movie images"
        className="w-full h-auto rounded-lg shadow-lg   transition-transform duration-300 cursor-pointer"
      />
    </div>
  );
};

export default MovieCard;
