import React from "react";
import LeftSideBar from "./LeftSideBar";

const Contact = () => {
  return (
    <>
    {/* Dummy Contact Page */}
      <div className="flex flex-row">
        <LeftSideBar />
        <div className="bg-gray-100 min-h-screen w-full p-8">
          <div className="max-w-xl mx-auto bg-white rounded-lg shadow-lg p-6">
            <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
            <p className="text-gray-700 mb-4">
              If you have any questions, suggestions, or feedback, please feel
              free to reach out to us using the contact information below.
            </p>
            <div className="mb-4">
              <h2 className="text-xl font-semibold mb-2">
                Contact Information
              </h2>
              <p className="text-gray-700">
                Email:{" "}
                <a href="mailto:contact@example.com">contact@example.com</a>
              </p>
              <p className="text-gray-700">
                Phone: <a href="tel:+123456789">+1 (234) 567-89</a>
              </p>
            </div>
            <div className="mb-4">
              <h2 className="text-xl font-semibold mb-2">Address</h2>
              <p className="text-gray-700">
                123 Main Street <br />
                City, State ZIP Code <br />
                Country
              </p>
            </div>
            <p className="text-gray-700">
              We look forward to hearing from you!
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
