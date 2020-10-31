import React from "react";
//components
import BookmarkCard from "../components/bookmarkCard";
import BoomarkLandingSection from "../components/boomarkLandingSection";
//css
import "../assets/css/main.css";

const index = () => {
  return (
    <div>
      <BoomarkLandingSection />
      <BookmarkCard />
    </div>
  );
};

export default index;
