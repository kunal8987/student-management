import React, { useState, useEffect } from "react";

const Academic = ({ onNext, onPrevious }) => {
  const [data, setData] = useState({
    interestedCountry: "",
    englishProficiencyTest: "",
    testScore: "",
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    // No need to save to local storage
  }, [data]);

  const validate = () => {
    let newErrors = {};

    if (!data.interestedCountry)
      newErrors.interestedCountry = "Interested Country is required";
    if (!data.englishProficiencyTest)
      newErrors.englishProficiencyTest = "English Proficiency Test is required";
    if (
      data.englishProficiencyTest &&
      data.englishProficiencyTest !== "None" &&
      !data.testScore
    ) {
      newErrors.testScore = "Test Score is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleNext = (e) => {
    e.preventDefault();
    if (validate()) {
      onNext(data);
    }
  };

  return (
    <div className="p-8 bg-white rounded shadow-md max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">
        Academic Interests
      </h2>

      <form onSubmit={handleNext}>
        <div className="mb-4">
          <label className="block text-gray-700">
            Interested Country <span className="text-red-500">*</span>
          </label>
          <select
            name="interestedCountry"
            value={data.interestedCountry}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded mt-1 focus:outline-none focus:border-blue-500 transition duration-300 ease-in-out"
          >
            <option value="">Select Country</option>
            <option value="India">India</option>
            <option value="USA">USA</option>
            <option value="UK">UK</option>
          </select>
          {errors.interestedCountry && (
            <p className="text-red-500 text-sm">{errors.interestedCountry}</p>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">
            English Proficiency Test <span className="text-red-500">*</span>
          </label>
          <select
            name="englishProficiencyTest"
            value={data.englishProficiencyTest}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded mt-1 focus:outline-none focus:border-blue-500 transition duration-300 ease-in-out"
          >
            <option value="">Select Test</option>
            <option value="IELTS">IELTS</option>
            <option value="TOEFL">TOEFL</option>
            <option value="None">None</option>
          </select>
          {errors.englishProficiencyTest && (
            <p className="text-red-500 text-sm">
              {errors.englishProficiencyTest}
            </p>
          )}
        </div>

        {data.englishProficiencyTest &&
          data.englishProficiencyTest !== "None" && (
            <div className="mb-4">
              <label className="block text-gray-700">
                Test Score <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                name="testScore"
                value={data.testScore}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded mt-1 focus:outline-none focus:border-blue-500 transition duration-300 ease-in-out"
                required
              />
              {errors.testScore && (
                <p className="text-red-500 text-sm">{errors.testScore}</p>
              )}
            </div>
          )}

        <div className="mb-4">
          <button className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition">
            Submit
          </button>
        </div>
        <div className="mb-4">
          <button
            onClick={onPrevious}
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
          >
            Previous
          </button>
        </div>
      </form>
    </div>
  );
};

export default Academic;
