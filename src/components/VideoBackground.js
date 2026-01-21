import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

function VideoBackground({ movieId }) {
  useMovieTrailer(movieId);
  const video = useSelector((store) => store.movies?.trailerVideo);

  return (
    <div className="w-screen absolute top-0 -z-10">
      <iframe
        className="w-screen h-screen"
        src={
          "https://www.youtube.com/embed/" +
          video?.key +
          "?autoplay=1&mute=1&loop=1&playlist=" +
          video?.key +
          "&controls=0&showinfo=0&rel=0&modestbranding=1"
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
}
export default VideoBackground;
