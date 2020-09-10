import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  faHome,
  faSearch,
  faBell,
  faEnvelope,
  faBookmark,
  faClipboardList,
  faUser,
  faEllipsisH,
} from "@fortawesome/free-solid-svg-icons";

import MenuItem from "../Component/MenuItem";
import Account from "../Component/Account";
import TweetButton from "../Component/TweetButton";
import TweetIcon from "../Component/TweetIcon";

const menus = [
  { icon: faHome, title: "Home" },
  { icon: faSearch, title: "Explore" },
  { icon: faBell, title: "Notification" },
  { icon: faEnvelope, title: "Messages" },
  { icon: faBookmark, title: "Bookmarks" },
  { icon: faClipboardList, title: "Lists" },
  { icon: faUser, title: "Profile" },
  { icon: faEllipsisH, title: "More" },
];

export default function MenuBar() {
  return (
    <div className="flex flex-col xl:w-1/5 border-r border-lighter px-2 lg:px-6 py-2 justify-between">
      <div className="w-full">
        <TweetIcon />
        {menus.map((menu, index) => (
          <Link key={index} to={"/" + menu.title.toLowerCase()}>
            <MenuItem icon={menu.icon} text={menu.title} />
          </Link>
        ))}
        <TweetButton />
      </div>
      <Account />
    </div>
  );
}
