import React from "react";
import Sidebar from "../components/common/Sidebar";
import Mainbar from "../components/common/Mainbar";
import useScreenSize from "../hooks/useScreenSize";
import SearchBox from "../components/common/SearchBox";
const Homepage = () => {
  const [isMobile] = useScreenSize();
  return (
    <main className="flex items-start">
      {!isMobile && (
        <Sidebar activeSidebar={true} setActiveSidebar={() => {}} />
      )}
      <Mainbar />
      <div className="hidden md:block max-w-[370px] w-full px-6 top-0 sticky shrink-0">
        <SearchBox />
      </div>
    </main>
  );
};

export default Homepage;
