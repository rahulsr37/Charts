import React from "react";
import LeftSideBar from "./LeftSideBar";

const About = () => {
  return (
    <>
    {/* Dummy About Us Page */}
    <div className="flex flex-row">
      <LeftSideBar/>
      <div className="bg-gray-100 min-h-screen p-8 w-full">
        <div className="max-w-xl mx-auto bg-white rounded-lg shadow-lg p-6">
          <h1 className="text-3xl font-bold mb-4">About Us</h1>
          <p className="text-gray-700 mb-4">
            Welcome to our website! We are a dedicated team of developers and
            creators, passionate about building amazing web applications and
            providing valuable content.
          </p>
          <p className="text-gray-700 mb-4">
            Our mission is to make the web a better place by sharing knowledge
            and creating useful tools for our users.
          </p>
          <p className="text-gray-700">
            Thank you for visiting our website. If you have any questions or
            feedback, please don't hesitate to contact us.
          </p>
        </div>
      </div>
      </div>
    </>
  );
};

export default About;
