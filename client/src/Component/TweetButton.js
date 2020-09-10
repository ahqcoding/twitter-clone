import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
export default function TweetButton() {
  return (
    <button className="text-white bg-blue rounded-full font-semibold focus:outline-none w-12 h-12 lg:h-auto xl:w-full p-3 hover:bg-darkblue">
      <p className="hidden xl:block">Tweet</p>
      <FontAwesomeIcon icon={faPlus} className="xl:hidden" />
    </button>
  );
}
