import React, { useState } from "react";
import logo from "../asset/Daltin_Logo.png";

const Home = ({ onNext }) => {
  const [step, setStep] = useState(1);

  const messages = [
    "We're excited to have you here. This process will guide you through a few simple steps to get you registered.",
    "Please provide us with your basic information to get started.",
    "Tell us a bit about your interests and preferences.",
    "Let us know your availability and preferred schedule.",
    "Review and confirm your details. You're almost done!",
  ];

  const handleNext = () => {
    if (step < 5) {
      setStep(step + 1);
    } else {
      onNext(); // This will trigger the parent's onNext to move to PersonalInfo
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md text-center">
        <img
          src={logo}
          alt="Logo"
          className="mx-auto w-32 mb-4 animate-fadeIn"
        />
        <h1 className="text-2xl font-bold mb-2 text-gray-800 animate-fadeIn">
          Welcome to the Registration Process
        </h1>
        <p className="text-gray-600 mb-6 animate-fadeIn">
          {messages[step - 1]}
        </p>
        <div className="flex justify-center items-center space-x-2 animate-progressIndicator">
          {[...Array(5)].map((_, index) => (
            <div
              key={index}
              className={`h-2 w-2 rounded-full ${
                index < step ? "bg-blue-500" : "bg-gray-300"
              }`}
            ></div>
          ))}
        </div>
        <p className="text-blue-500 mt-4 animate-progressIndicator">
          Step {step} of 5
        </p>
        <button
          onClick={handleNext}
          className="mt-4 bg-blue-500 text-white py-2 px-4 rounded"
        >
          {step < 5 ? "Next Step" : "Let's Start"}
        </button>
      </div>
    </div>
  );
};

export default Home;
