import React, { useState } from "react";
import LeftSideBar from "./LeftSideBar";
import RightSideBar from "./RightSideBar";
import RenderCharts from "./RenderCharts";

const Home = () => {
  const [analyticItem, setAnalyticItem] = useState(0);

  return (
    <>
      <div className="home_page flex justify-between">
        <LeftSideBar />
        <RenderCharts analyticItem={analyticItem} />
        <RightSideBar
          analyticItem={analyticItem}
          setAnalyticItem={setAnalyticItem}
        />
      </div>
    </>
  );
};

export default Home;
