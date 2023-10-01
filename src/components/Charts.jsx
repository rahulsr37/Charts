import React, { useEffect } from "react";
import * as d3 from "d3";
import data from "../dummyData.json";

const Charts = (props) => {
  const { graphNumber } = props;
  useEffect(() => {
    // Set up the dimensions of the chart
    const margin = { top: 30, right: 30, bottom: 40, left: 40 };
    const width = 700 - margin.left - margin.right;
    const height = 400 - margin.top - margin.bottom;

    // Set up the scales for x and y axis
    const x = d3.scaleTime().range([0, width]);
    const y = d3.scaleLinear().range([height, 0]);

    // Creating the svg element and appending it to the svg tag below
    const svg = d3
      .select("#dataChart")
      .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    // Defining the x and y axis domains (index values for respective axis)
    x.domain(d3.extent(data[graphNumber], (d) => new Date(d.date)));
    y.domain([0, d3.max(data[graphNumber], (d) => d.value)]);

    // Adding the x-asis
    svg
      .append("g")
      .attr("transform", `translate(0,${height})`)
      .transition()
      .call(
        d3
          .axisBottom(x)
          .ticks(d3.timeMonth.every(1))
          .tickFormat(d3.timeFormat("%b"))
      );

    // Adding the y-axis
    svg.append("g").transition().call(d3.axisLeft(y));

    // Create the line generator
    const line = d3
      .line()
      .x((d) => x(new Date(d.date)))
      .y((d) => y(d.value))
      .curve(d3.curveBundle.beta(1));

    // Add the line path to the svg element
    svg
      .append("path")
      .datum(data[graphNumber])
      .attr("fill", "none")
      .attr("stroke", "blue")
      .attr("stroke-width", 1)
      .attr("d", line);

    return () => {
      d3.select("svg").remove();
    };
  }, [graphNumber]);

  const lowestValue = data[graphNumber].reduce((min, current) => {
    return current.value < min.value ? current : min;
  }, data[graphNumber][0]);

  return (
    <>
      <div className="flex flex-col">
        <h1 className="text-3xl font-semibold mt-3">Stats</h1>
        <div
          id="dataChart"
          className="w-full bg-white rounded-lg shadow-lg p-3 mt-5"
        ></div>
        <div className="infoDiv">
          <h2 className="text-xl font-medium mt-10">BASIC INFORMATION</h2>
          <div id="row_1" className="flex">
            <div className="w-1/2 flex flex-col justify-center items-center border border-r-black border-b-black p-5">
              <h1 className="text-lg">YEAR</h1>
              <h3 className="text-base">{new Date(data[graphNumber][0].date).getFullYear()}</h3>
            </div>
            <div className="w-1/2 flex flex-col justify-center items-center border border-l-black border-b-black p-5">
              <h1 className="text-lg">LOWEST</h1>
              <h3 className="text-base">{lowestValue.value}</h3>{" "}
            </div>
          </div>
          <div id="row_2" className="flex">
            <div className="w-1/2 flex flex-col justify-center items-center border border-r-black border-t-black p-5">
              <h1 className="text-lg">X-AXIS</h1>
              <h3 className="text-base">Date</h3>
            </div>
            <div className="w-1/2 flex flex-col justify-center items-center border border-l-black border-t-black p-5">
              <h1 className="text-lg">Y-AXIS</h1>
              <h3 className="text-base">Value</h3>{" "}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Charts;
