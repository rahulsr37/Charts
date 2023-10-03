import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { logout, selectUser } from "../features/userSlice";

const LeftSideBar = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const Menus = [
    {
      title: "Dashboard",
      icon: "https://img.icons8.com/pastel-glyph/30/laptop-metrics--v1.png",
      path: "/",
    },
    {
      title: "About",
      icon: "https://img.icons8.com/ios/100/info--v1.png",
      path: "/about",
    },
    {
      title: "Contact",
      icon: "https://img.icons8.com/laces/64/paper-plane.png",
      path: "/contact",
    },
  ];

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logout());
  };

  return (
    <>
      <div className="bg-[#eff4f7] h-screen sticky top-0 min-w-[18%]">
        <span className="text-black flex flex-col items-center text-xl pt-12">
          <img
            className="rounded-full"
            width="70"
            height="70"
            src="../images/IMG_20201012_013153-removebg-preview.png"
            alt="user--v1"
          />
          <h1 className="mt-2">{user.name}</h1>
        </span>

        <div className="mt-28">
          <ul>
            {Menus.map((menu, index) => {
              return (
                <NavLink
                  to={menu.path}
                  key={index}
                  className={({ isActive }) => {
                    console.log(`is active ${isActive}`);
                    return isActive ? "active-link flex" : "flex";
                  }}
                >
                  <li
                    className={`menuItems w-full flex items-center space-x-3 my-4 pl-6 text-lg font-light p-1`}
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
                    <span>{menu.title}</span>
                  </li>
                </NavLink>
              );
            })}
          </ul>
        </div>

        <div className="absolute bottom-8">
          <button className=" opacity-70" onClick={handleLogout}>
            <span className="flex flex-row">
              <img
                width="30"
                height="30"
                src="https://img.icons8.com/ios-glyphs/30/exit.png"
                alt=""
                className="ml-6"
              />
              <p className="ml-4 text-xl font-semibold">Logout</p>
            </span>
          </button>
        </div>
      </div>
    </>
  );
};

export default LeftSideBar;
