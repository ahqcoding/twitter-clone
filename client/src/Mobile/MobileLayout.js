import React, { Fragment, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faComment,
  faRetweet,
  faHeart,
  faShareSquare,
  faTimes,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
export default function MobileLayout() {
  const [open, setOpen] = useState(false);

  const toggleSidebar = () => {
    setOpen((prev) => !prev);
  };

  let hideSidebar = open ? "" : "-ml-11/12";
  return (
    <Fragment>
      <div
        className={`absolute z-10 bg-white px-4 h-full w-11/12 min-w-11/12 transition-all duration-500 transform ${hideSidebar}`}
      >
        <div className="flex items-center border-b justify-between w-full hover:bg-lightblue py-3">
          <h1 className="text-xl font-bold"> Account info </h1>
          <div className="text-xl">
            <FontAwesomeIcon
              onClick={toggleSidebar}
              icon={faTimes}
              className=""
            />
          </div>
        </div>

        <div className="flex items-center justify-between  w-full hover:bg-lightblue mt-2 focus:outline-none">
          <div>
            <img
              src="https://pbs.twimg.com/profile_images/67285389/digdug-fygar-2a_reasonably_small.gif"
              className="w-10 h-10 rounded-full border border-lighter"
            />
            <p className="text-sm font-bold leading-tight"> Steph Dietz </p>
            <p className="text-sm leading-tight"> @SaaSyEth </p>
          </div>
          <div className="w-12 h-12 text-xl">
            <FontAwesomeIcon icon={faPlus} />
          </div>
        </div>
      </div>
      <div className="w-full h-full ">
        <div className="flex items-center w-full hover:bg-lightblue p-2 focus:outline-none justify-between border-b">
          <div
            className="flex items-center space-x-6 px-2 font-bold"
            onClick={() => setOpen((prev) => !prev)}
          >
            <img
              src="https://pbs.twimg.com/profile_images/67285389/digdug-fygar-2a_reasonably_small.gif"
              className="w-10 h-10 rounded-full border border-lighter"
            />
            <h1 className="text-xl font-bold">Home</h1>
          </div>
          <div className="w-10 h-10 text-center hover:bg-lightblue rounded-full ">
            <FontAwesomeIcon icon={faStar} className="text-xl text-blue h-10" />
          </div>
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
              <p className="py-2">test content</p>
              <div className="flex items-center justify-between w-full">
                <div className="flex items-center text-sm text-dark">
                  <FontAwesomeIcon icon={faComment} className="mr-3" />
                  <p> 0 </p>
                </div>
                <div className="flex items-center text-sm text-dark">
                  <FontAwesomeIcon icon={faRetweet} className="mr-3" />
                  <p> 0 </p>
                </div>
                <div className="flex items-center text-sm text-dark">
                  <FontAwesomeIcon icon={faHeart} className="mr-3" />
                  <p> 1 </p>
                </div>
                <div className="flex items-center text-sm text-dark">
                  <FontAwesomeIcon icon={faShareSquare} className="mr-3" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
