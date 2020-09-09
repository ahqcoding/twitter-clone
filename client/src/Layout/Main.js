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
} from "@fortawesome/free-solid-svg-icons";
export default function Main() {
  return (
    <div className="w-full md:w-1/2 h-full overflow-y-scroll">
      <div className="px-5 py-3 border-b border-lighter flex items-center justify-between">
        <h1 className="text-xl font-bold">Home</h1>
        <div className="w-10 h-10 text-center hover:bg-lightblue rounded-full">
          <FontAwesomeIcon icon={faStar} className="text-xl text-blue  h-10" />
        </div>
      </div>
      <div className="px-5 py-3 border-b-8 border-lighter flex">
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

      <div className="flex flex-col-reverse">
        <div className="w-full p-4 border-b hover:bg-lighter flex">
          <div className="flex-none mr-4">
            <img
              src="profile.png"
              className="w-12 h-12 rounded-full flex-none"
            />
          </div>
          <div className="w-full">
            <div className="flex items-center w-full">
              <p className="font-semibold"> Steph Dietz </p>
              <p className="text-sm text-dark ml-2"> @SaaSyEth </p>
              <p className="text-sm text-dark ml-2"> 1 sec </p>
              <i className="fas fa-angle-down text-dark ml-auto"></i>
            </div>
            <p class="py-2">test content</p>
            <div class="flex items-center justify-between w-full">
              <div class="flex items-center text-sm text-dark">
                <FontAwesomeIcon icon={faComment} className="mr-3" />
                <p> 0 </p>
              </div>
              <div class="flex items-center text-sm text-dark">
                <FontAwesomeIcon icon={faRetweet} className="mr-3" />
                <p> 0 </p>
              </div>
              <div class="flex items-center text-sm text-dark">
                <FontAwesomeIcon icon={faHeart} className="mr-3" />
                <p> 1 </p>
              </div>
              <div class="flex items-center text-sm text-dark">
                <FontAwesomeIcon icon={faShareSquare} className="mr-3" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
