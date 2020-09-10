import React, { useState } from "react";

export default function RepostItem() {
  return (
    <div className="w-full p-2 border hover:bg-lighter flex items-start rounded-lg">
      <div className="w-full">
        <div className="flex items-center w-full ">
          <img
            src="https://pbs.twimg.com/profile_images/67285389/digdug-fygar-2a_reasonably_small.gif"
            className="w-4 h-4 rounded-full"
          />
          <p className="font-semibold ml-2"> Steph Dietz </p>
          <p className="text-sm text-dark ml-2">@SaaSyEth</p>
          <p className="text-sm text-dark ml-2"> 1 sec </p>
          {/* <i className="fas fa-angle-down text-dark ml-auto"></i> */}
        </div>
        <p className="py-2">test content</p>
      </div>
    </div>
  );
}
