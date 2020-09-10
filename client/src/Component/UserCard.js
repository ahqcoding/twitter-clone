import React from "react";
import { Link } from "react-router-dom";
export default function UserCard({ show }) {
  let hidden = show ? "" : "hidden";
  return (
    <div
      className={
        hidden +
        " absolute justify-center bg-white p-4 w-72 mt-3 left-2 z-10 shadow-2xl rounded-lg"
      }
    >
      <div className="mr-4 flex justify-between items-center">
        <Link to="/user/unknown">
          <img
            src="https://pbs.twimg.com/profile_images/67285389/digdug-fygar-2a_reasonably_small.gif"
            className="w-12 h-12 rounded-full flex-none hover:bg-lightest"
          />
        </Link>
        <button className="bg-blue px-2 py-1 text-white text-sm rounded">
          Follow
        </button>
      </div>

      <Link to="/user/unknown" className="hover:underline">
        <p className="font-semibold"> Steph Dietz </p>
      </Link>
      <Link to="/user/unknown">
        <p className="text-sm text-dark">@SaaSyEth</p>
      </Link>
      {/* <i className="fas fa-angle-down text-dark ml-auto"></i> */}

      <p className="py-1">test content</p>
      <div className="flex justify-between">
        <p className="text-sm">
          <span className="font-bold">1000</span> <span>Following</span>
        </p>
        <p className="text-sm">
          <span className="font-bold">1000</span> Followers
        </p>
      </div>
      {/* <div className={"text-center flex justify-center py-3"}>
      <button className="w-32 rounded-md bg-lighter">Cancel</button>
      </div> */}
    </div>
  );
}
