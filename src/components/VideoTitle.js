import { CircleQuestionMark, Play } from "lucide-react";

function VideoTitle({ title, overview }) {
  return (
    <div className="w-screen aspect-video pt-[20%] px-6 md:px-24 absolute text-white ">
      <h1 className="text-2xl md:text-6xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-1/4 md:w-1/3 lg:w-1/2">{overview}</p>
      <div className="flex">
        <button className="bg-white text-black py-1 md:py-4 px-3 md:px-12 text-xl rounded-lg hover:bg-opacity-80 flex items-center hover:bg-opacity-80">
          <Play className="mr-1" /> Play
        </button>
        <button className="mx-2 bg-gray-500 text-white py-1 md:py-4 px-3 md:px-12 text-xl bg-opacity-50 rounded-lg flex items-center">
          <CircleQuestionMark className="mr-1" /> More Info
        </button>
      </div>
    </div>
  );
}

export default VideoTitle;
