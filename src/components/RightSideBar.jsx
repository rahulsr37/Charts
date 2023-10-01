import React from "react";

const RightSideBar = (props) => {
  const { analyticItem, setAnalyticItem } = props;
  const Menus = [
    {
      title: "Graph - 1",
      icon: "https://img.icons8.com/windows/32/graph.png",
    },
    {
      title: "Graph - 2",
      icon: "https://img.icons8.com/windows/32/graph.png",
    },
    {
      title: "Graph - 3",
      icon: "https://img.icons8.com/windows/32/graph.png",
    },
  ];

  return (
    <>
      <div className="bg-[#eff4f7] h-screen sticky top-0 w-64">
        <h1 className="text-black flex flex-col items-start text-2xl mt-16 pl-6 font-semibold">
          Analytics
        </h1>

        <div className="mt-10">
          <ul>
            {Menus.map((menu, index) => {
              return (
                <li
                  key={index}
                  className={`flex cursor-pointer w-full items-center space-x-3 my-4 pl-6 text-lg font-light p-1 ${analyticItem == index ? "active-link" : ""} `}
                >
                  {" "}
                  <span>
                    {" "}
                    <img
                      width="20"
                      height="20"
                      src={menu.icon}
                      alt="laptop-metrics--v1"
                    />{" "}
                  </span>
                  <span onClick={() => setAnalyticItem(index)}>
                    {menu.title}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default RightSideBar;
