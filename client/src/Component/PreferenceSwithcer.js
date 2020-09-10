import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExchangeAlt, faCog } from "@fortawesome/free-solid-svg-icons";
export default function PreferenceSwithcer({ show }) {
  return (
    <div
      className={
        show
          ? ""
          : "hidden" +
            " absolute justify-center bg-white w-84 md:mr-2 right-0 z-10 shadow-2xl rounded-lg"
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
      {/* <div className={"text-center flex justify-center py-3"}>
    <button className="w-32 rounded-md bg-lighter">Cancel</button>
    </div> */}
    </div>
  );
}
