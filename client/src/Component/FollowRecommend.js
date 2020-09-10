import React from "react";

export default function FollowRecommend() {
  return (
    <div className="w-full rounded-lg bg-lightest my-4">
      <div className=" p-3">
        <p className="text-lg font-bold">Who to Follow</p>
      </div>
      <div className="w-full flex hover:bg-lighter p-3 border-t border-lighter items-center">
        <img className="w-12 h-12 rounded-full border border-lighter" />
        <div className="hidden lg:block ml-4">
          <p className="text-sm font-bold leading-tight"> aqxiansheng</p>
          <p className="text-sm leading-tight"> @aqxiansheng </p>
        </div>
        <button className="ml-auto text-sm text-blue font-bold py-1 px-4 rounded-full border-2 border-blue hover:bg-light">
          Follow
        </button>
      </div>
      <button className="p-3 w-full hover:bg-lighter text-left text-blue border-t border-lighter">
        Show More
      </button>
    </div>
  );
}
