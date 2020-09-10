import React, { Fragment } from "react";
import RightBar from "./RightBar";
import Main from "./Main";
import MenuBar from "../MenuBar";
import { useDispatch, useSelector } from "react-redux";

import ModalInputArea from "./ModalInputArea";
export default function Home() {
  const user = useSelector((state) => state.authentication.user);

  return (
    <Fragment>
      <MenuBar user={user} />
      <Main user={user} />
      <RightBar user={user} />
      <ModalInputArea />
    </Fragment>
  );
}
