import React, { useState } from "react";
import { FaFacebook } from "react-icons/fa";

const AuthButtons = () => {
  const [popupMessage, setPopupMessage] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const handleButtonClick = (platform) => {
    setPopupMessage(`${platform} login clicked!`);
    setShowPopup(true);

    setTimeout(() => {
      setShowPopup(false);
    }, 2000);
  };

  return (
    <div className="relative min-h-screen flex flex-col items-start justify-start bg-white pt-6 px-6 md:px-20">
      <div className="flex flex-col items-start w-full max-w-lg">
        {/* Heading */}
        <h2 className="text-4xl font-extrabold text-gray-900 mb-10">Login in</h2>

        {/* Buttons stacked */}
        <div className="flex flex-col gap-5 w-full">
          <button
            onClick={() => handleButtonClick("Google")}
            className="flex items-center justify-center w-full py-4 px-10 rounded-full border border-gray-300 bg-white text-gray-800 font-semibold text-lg shadow-sm hover:shadow-lg hover:scale-105 hover:border-gray-400 transition-all active:scale-95"
          >
            <img
              src="https://developers.google.com/identity/images/g-logo.png"
              alt="Google logo"
              className="w-5 h-5 mr-2"
            />
            Sign in with Google
          </button>

          <button
            onClick={() => handleButtonClick("Facebook")}
            className="flex items-center justify-center w-full py-4 px-10 rounded-full border border-gray-300 bg-white text-gray-800 font-semibold text-lg shadow-sm hover:shadow-lg hover:scale-105 hover:border-gray-400 transition-all active:scale-95"
          >
            <FaFacebook className="text-blue-600 text-xl mr-2" />
            Continue with Facebook
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuthButtons;
