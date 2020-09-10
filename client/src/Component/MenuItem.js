import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function MenuItem({ icon, text }) {
  return (
    <div className="focus:outline-none hover:text-blue flex justify-start items-center xl:hover:bg-lightblue rounded-full mr-auto mb-3">
      <div className="h-12 w-12 hover:bg-lightblue text-2xl text-center rounded-full">
        <FontAwesomeIcon icon={icon} className="h-12" />
      </div>
      <p className="text-lg font-semibold text-left hidden xl:block">{text}</p>
    </div>
  );
}
