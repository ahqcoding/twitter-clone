import React, { useState } from "react";

import { isMobile } from "./utils/deviceChecker";
import DesktopLayout from "./Desktop/DesktopLayout";
import MobileLayout from "./Mobile/MobileLayout";

export default function App() {
  console.log(isMobile());
  return (
    <div className={"flex h-screen w-full h-full relative "}>
      <DesktopLayout />
    </div>
  );
}
