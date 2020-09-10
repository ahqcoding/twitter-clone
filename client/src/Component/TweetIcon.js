import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
export default function TweetIcon() {
  return (
    <div className="h-12 w-12 hover:bg-lightblue text-3xl rounded-full text-blue text-center mb-3">
      <FontAwesomeIcon icon={faTwitter} className="h-12" />
    </div>
  );
}
