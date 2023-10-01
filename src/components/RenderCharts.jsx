import React from "react";
import Charts from "./Charts";

const RenderCharts = (props) => {
  const { analyticItem } = props;

  switch (analyticItem) {
    case 0:
      return <Charts graphNumber="graph1" />;
      break;
    case 1:
      return <Charts graphNumber="graph2" />;
      break;
    case 2:
      return <Charts graphNumber="graph3" />;
      break;

    default:
      break;
  }
};

export default RenderCharts;
