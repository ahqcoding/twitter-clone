import React, { Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";

import PreferenceSwithcer from "../../Component/PreferenceSwithcer";

import PostItem from "../../Component/PostItem";
import InputBox from "../../Component/InputBox";
import postActions from "../../_actions/post.actions";

export default function Main({ user }) {
  // let post = useSelector((state) => state.addPost.post);
  const dispatch = useDispatch();
  const handleAddPost = (content) => {
    dispatch(postActions.addPost({ text: content }));
  };
  return (
    <div className="w-full lg:w-1/2 h-full overflow-y-scroll relative">
      <div className="px-5 py-3 border-b border-lighter flex items-center justify-between">
        <h1 className="text-xl font-bold">Home</h1>
        <div className="w-10 h-10 text-center hover:bg-lightblue rounded-full ">
          <FontAwesomeIcon icon={faStar} className="text-xl text-blue h-10" />
        </div>
      </div>
      <PreferenceSwithcer />
      <InputBox onAddPost={handleAddPost} />
      <PostItem />
    </div>
  );
}
