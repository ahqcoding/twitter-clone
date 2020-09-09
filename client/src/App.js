import React from "react";
import LeftBar from "./Layout/LeftBar";
import Main from "./Layout/Main";
import RightBar from "./Layout/RightBar";
export default function App() {
  return (
    <div className="flex container h-screen w-full">
      <LeftBar />
      <Main />
      <RightBar />
    </div>
  );
}
