import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faCog,
  faAngleDown,
} from "@fortawesome/free-solid-svg-icons";
export default function Trend() {
  return (
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
  );
}
