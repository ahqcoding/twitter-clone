import React from "react";
import InputBox from "../../Component/InputBox";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
export default function ModalInputArea() {
  return (
    <div className="hidden w-full h-full absolute bg-black bg-opacity-50 flex">
      <div className="w-1/3 mx-auto mt-32 h-48 z-20 bg-white bg-opacity-100 shadow-2xl p-4 rounded-lg">
        <div className="border-b mb-2">
          <FontAwesomeIcon icon={faTimes} className="text-2xl" />
        </div>

        <InputBox />
      </div>
    </div>
  );
}
