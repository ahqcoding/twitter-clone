import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faFilm,
  faChartBar,
  faSmile,
  faImage,
  faComment,
  faRetweet,
  faHeart,
  faShareSquare,
  faExchangeAlt,
  faCog,
} from "@fortawesome/free-solid-svg-icons";
import { isMobile } from "../utils/deviceChecker";

let absoluteBottom = isMobile() ? 0 : "auto";
let hideCancelButton = isMobile() ? "" : "hidden";
export default function Main() {
  let shouldHideInputArea = isMobile() ? "hidden" : "";

  return (
    <div className="w-full lg:w-1/2 h-full overflow-y-scroll relative">
      <div className="px-5 py-3 border-b border-lighter flex items-center justify-between">
        <h1 className="text-xl font-bold">Home</h1>
        <div className="w-10 h-10 text-center hover:bg-lightblue rounded-full ">
          <FontAwesomeIcon icon={faStar} className="text-xl text-blue h-10" />
        </div>
      </div>

      <div
        className={
          "absolute justify-center bg-white w-84 md:mr-2 right-0 z-10 shadow-2xl rounded-lg bottom-" +
          absoluteBottom
        }
      >
        <div className="border-b border-lighter px-10 py-8 text-center text-xl ">
          <h1 className="font-bold">Home shows you top Tweets first</h1>
        </div>
        <div className="px-10 py-3 flex items-center space-x-4 hover:bg-lighter">
          <FontAwesomeIcon icon={faExchangeAlt} />
          <div>
            <p>See latest Tweets instead</p>
            <span className="text-xs ">
              You’ll be switched back Home after you’ve been away for a while.
            </span>
          </div>
        </div>
        <div className="px-10 py-4 flex items-center space-x-4 hover:bg-lighter">
          <FontAwesomeIcon icon={faCog} />
          <div>
            <p>View content preferences</p>
          </div>
        </div>
        <div
          className={hideCancelButton + " text-center flex justify-center py-3"}
        >
          <button className="w-32 rounded-md bg-lighter">Cancel</button>
        </div>
      </div>
      <div
        className={
          shouldHideInputArea + " px-5 py-3 border-b-8 border-lighter flex"
        }
      >
        <div className="flex-none">
          <img
            src="profile.png"
            className="flex-none w-12 h-12 rounded-full border-lighter"
          />
        </div>
        <form className="w-full px-4 relative">
          <textarea
            className="mt-3 pb-3 w-full focus:outline-none"
            placeholder="What's up?"
          />
          <div className="flex items-center">
            <div className="w-10 h-10 text-center hover:bg-lightblue rounded-full">
              <FontAwesomeIcon
                icon={faImage}
                className="text-lg text-blue h-10"
              />
            </div>
            <div className="w-10 h-10 text-center hover:bg-lightblue rounded-full">
              <FontAwesomeIcon
                icon={faFilm}
                className="text-lg text-blue h-10"
              />
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
    </div>
  );
}
