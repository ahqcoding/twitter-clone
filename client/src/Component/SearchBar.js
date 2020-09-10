import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
export default function SearchBar() {
  return (
    <div className="w-full relative">
      <input
        className="pl-12 rounded-full w-full p-2 bg-lighter text-sm mb-4"
        placeholder="Search Twitter"
      />
      <FontAwesomeIcon
        icon={faSearch}
        className="absolute left-0 top-0 ml-5 mt-3 text-sm text-light"
      />
    </div>
  );
}
