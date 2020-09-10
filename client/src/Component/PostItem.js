import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faComment,
  faRetweet,
  faHeart,
  faShareSquare,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import UserCard from "./UserCard";
import RepostItem from "./RepostItem";
export default function PostItem() {
  const [showUserCard, setShowUserCard] = useState(false);
  const toggleUserCard = () => {
    setShowUserCard((prev) => !prev);
  };
  return (
    <div className="flex flex-col-reverse">
      <div className="w-full p-2 border-b hover:bg-lighter flex ">
        <div className="mr-4  ">
          <Link to="/user/unknown">
            <img
              src="https://pbs.twimg.com/profile_images/67285389/digdug-fygar-2a_reasonably_small.gif"
              className="w-12 h-12 rounded-full flex-none hover:bg-lightest"
            />
          </Link>
        </div>
        <div className="w-full">
          <div className="flex items-center w-full">
            <Link to="/user/unknown" className="hover:underline">
              <p className="font-semibold"> Steph Dietz </p>
            </Link>
            <Link to="/user/unknown">
              <p
                className="text-sm text-dark ml-2"
                onMouseEnter={toggleUserCard}
                onMouseLeave={toggleUserCard}
              >
                @SaaSyEth
              </p>
              <UserCard show={showUserCard} />
            </Link>

            <p className="text-sm text-dark ml-2"> 1 sec </p>
            {/* <i className="fas fa-angle-down text-dark ml-auto"></i> */}
          </div>
          <p className="py-2">test content</p>
          <img
            src="https://pbs.twimg.com/media/EhhOdy7VoAAxuKx?format=jpg&name=large"
            className="h-64 w-full object-cover object-top rounded-lg border"
          />
          <RepostItem />

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
  );
}
