import React from "react";

import SearchBar from "../../Component/SearchBar";
import Trend from "../../Component/Trend";
import FollowRecommend from "../../Component/FollowRecommend";
export default function RightBar() {
  return (
    <div className="lg:block hidden w-1/3 h-full border-l border-lighter py-2 px-6 overflow-y-scroll">
      <SearchBar />
      <Trend />
      <FollowRecommend />
    </div>
  );
}
