import React from "react";

export default function Dialog({ children }) {
  return (
    <div className="bg-opacity-0 absolute w-full h-full top-0 left-0 flex items-center justify-center z-40">
      <div className="absolute w-full h-full bg-black bg-opacity-25 top-0 left-0  flex items-center justify-center z-40">
        <div
          onClick={() => console.log("test")}
          className="absolute w-1/2 h-32 bg-white rounded-sm shadow-lg flex text-2xl bg-opacity-100 z-40 items-center justify-center"
        >
          {children}
        </div>
      </div>
    </div>
  );
}
