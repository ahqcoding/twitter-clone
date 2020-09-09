import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faCog,
  faAngleDown,
} from "@fortawesome/free-solid-svg-icons";
export default function RightBar() {
  return (
    <div className="md:block hidden w-1/3 h-full border-l border-lighter py-2 px-6 overflow-y-scroll relative">
      <input
        className="pl-12 rounded-full w-full p-2 bg-lighter text-sm mb-4"
        placeholder="Search Twitter"
      />
      <FontAwesomeIcon
        icon={faSearch}
        className="absolute left-0 top-0 mt-5 ml-12 text-sm text-light"
      />
      <div className="w-full rounded-lg bg-lightest">
        <div className="flex items-center justify-between p-3">
          <p className="text-lg font-bold">Trends for You</p>
          <FontAwesomeIcon icon={faCog} className="text-lg text-blue" />
        </div>
        <div className="w-full flex justify-between hover:bg-lighter p-3 border-t border-lighter">
          <div>
            <p className="text-xs text-left leading-tight text-dark">Music </p>
            <p className="font-semibold text-sm text-left leading-tight">
              We Won
            </p>
            <p className="text-left text-sm leading-tight text-dark">
              135K Tweets
            </p>
          </div>
          <FontAwesomeIcon icon={faAngleDown} className="text-lg text-dark" />
        </div>
        <button className="p-3 w-full hover:bg-lighter text-left text-blue border-t border-lighter">
          Show More
        </button>
      </div>

      <div className="w-full rounded-lg bg-lightest my-4">
        <div className=" p-3">
          <p className="text-lg font-bold">Who to Follow</p>
        </div>
        <div className="w-full flex hover:bg-lighter p-3 border-t border-lighter items-center">
          <img className="w-12 h-12 rounded-full border border-lighter" />
          <div className="hidden lg:block ml-4">
            <p className="text-sm font-bold leading-tight"> aqxiansheng</p>
            <p className="text-sm leading-tight"> @aqxiansheng </p>
          </div>
          <button className="ml-auto text-sm text-blue font-bold py-1 px-4 rounded-full border-2 border-blue hover:bg-light">
            Follow
          </button>
        </div>
        <button className="p-3 w-full hover:bg-lighter text-left text-blue border-t border-lighter">
          Show More
        </button>
      </div>
    </div>
  );
}
