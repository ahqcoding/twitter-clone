import React, { Fragment } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faHashtag,
  faBell,
  faEnvelope,
  faBookmark,
  faClipboardList,
  faUser,
  faEllipsisH,
  faBook,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

const menus = [
  { icon: faHome, title: "Home" },
  { icon: faHashtag, title: "Explore" },
  { icon: faBell, title: "Notification" },
  { icon: faEnvelope, title: "Messages" },
  { icon: faBookmark, title: "Bookmarks" },
  { icon: faClipboardList, title: "Lists" },
  { icon: faUser, title: "Profile" },
  { icon: faEllipsisH, title: "More" },
];

export default function LeftBar() {
  return (
    <div className="hidden sm:block lg:w-1/5 border-r border-lighter px-2 lg:px-6 py-2 flex flex-col justify-between">
      <div className="w-full">
        <div className="h-12 w-12 hover:bg-lightblue text-3xl rounded-full text-blue text-center">
          <FontAwesomeIcon icon={faTwitter} className="h-12" />
        </div>

        {menus.map((menu, index) => (
          <div
            key={index}
            className="focus:outline-none hover:text-blue flex items-center hover:bg-lightblue rounded-full mr-auto mb-3"
          >
            <div className="h-12 w-12 text-3xl rounded-full  text-center">
              <FontAwesomeIcon icon={menu.icon} className="h-12" />
            </div>
            <p className="text-lg font-semibold text-left hidden lg:block px-2">
              {menu.title}
            </p>
          </div>
        ))}

        <button className="text-white bg-blue rounded-full font-semibold focus:outline-none w-12 h-12 lg:h-auto lg:w-full p-3 hover:bg-darkblue">
          <p class="hidden lg:block">Tweet</p>
          <FontAwesomeIcon icon={faPlus} className="lg:hidden" />
        </button>
      </div>
      <div className="lg:w-full relative">
        <div className="flex items-center w-full hover:bg-lightblue rounded-full p-2 focus:outline-none">
          <img
            src="https://pbs.twimg.com/profile_images/67285389/digdug-fygar-2a_reasonably_small.gif"
            class="w-10 h-10 rounded-full border border-lighter"
          />
          <div class="hidden lg:block ml-4">
            <p class="text-sm font-bold leading-tight"> Steph Dietz </p>
            <p class="text-sm leading-tight"> @SaaSyEth </p>
          </div>
          <i class="hidden lg:block fas fa-angle-down ml-auto text-lg"></i>
        </div>
        {/* <div class="absolute bottom-0 left-0 w-64 rounded-lg shadow-md border-lightest bg-white mb-16">
            <button class="p-3 flex items-center w-full hover:bg-lightest p-2 focus:outline-none">
            <img
                src="profile.png"
                class="w-10 h-10 rounded-full border border-lighter"
            />
            <div class="ml-4">
                <p class="text-sm font-bold leading-tight"> Steph Dietz </p>
                <p class="text-sm leading-tight"> @SaaSyEth </p>
            </div>
            <i class="fas fa-check ml-auto test-blue"></i>
            </button>
            <button class="w-full text-left hover:bg-lightest border-t border-lighter p-3 test-sm focus:outline-none">
            Add an existing account
            </button>
            <button class="w-full text-left hover:bg-lightest border-t border-lighter p-3 test-sm focus:outline-none">
            Log out @SaaSyEth
            </button>
        </div> */}
      </div>
    </div>
  );
}
