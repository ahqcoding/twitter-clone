import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFilm,
  faChartBar,
  faSmile,
  faImage,
} from "@fortawesome/free-solid-svg-icons";
export default function InputArea() {
  return (
    <div className="px-5 py-3 border-lighter flex">
      <div className="flex-none">
        <img
          src="https://pbs.twimg.com/profile_images/67285389/digdug-fygar-2a_reasonably_small.gif"
          className="flex-none w-12 h-12 rounded-full border-lighter"
        />
      </div>
      <form className="w-full px-4 relative">
        <textarea
          className="mt-3 pb-3 w-full focus:outline-none"
          placeholder="What's happening?"
        />
        <div className="flex items-center">
          <div className="w-10 h-10 text-center hover:bg-lightblue rounded-full">
            <FontAwesomeIcon
              icon={faImage}
              className="text-lg text-blue h-10"
            />
          </div>
          <div className="w-10 h-10 text-center hover:bg-lightblue rounded-full">
            <FontAwesomeIcon icon={faFilm} className="text-lg text-blue h-10" />
          </div>
          <div className="w-10 h-10 text-center hover:bg-lightblue rounded-full">
            <FontAwesomeIcon
              icon={faChartBar}
              className="text-lg text-blue h-10"
            />
          </div>
          <div className="w-10 h-10 text-center hover:bg-lightblue rounded-full">
            <FontAwesomeIcon
              icon={faSmile}
              className="text-lg text-blue h-10"
            />
          </div>
        </div>
        <button
          type="submit"
          className="h-10 px-4 text-white font-semibold bg-blue hover:bg-darkblue focus:outline-none rounded-full absolute bottom-0 right-0"
        >
          Tweet
        </button>
      </form>
    </div>
  );
}
