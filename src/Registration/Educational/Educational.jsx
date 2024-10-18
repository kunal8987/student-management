import React, { useState, useEffect } from "react";

const Educational = ({ onNext, onPrevious }) => {
  const [data, setData] = useState([
    {
      qualification: "",
      institution: "",
      percentage: "",
      passingYear: "",
      country: "",
    },
  ]);

  const [errors, setErrors] = useState([]);

  useEffect(() => {
    // Removed local storage functionality
  }, [data]);

  const validate = () => {
    let newErrors = [];
    data.forEach((qual, index) => {
      let qualErrors = {};
      if (!qual.qualification)
        qualErrors.qualification = "Qualification is required";
      if (!qual.institution) qualErrors.institution = "Institution is required";
      if (!qual.percentage) qualErrors.percentage = "Percentage is required";
      if (!qual.passingYear)
        qualErrors.passingYear = "Passing Year is required";
      if (!qual.country) qualErrors.country = "Country is required";
      newErrors[index] = qualErrors;
    });
    setErrors(newErrors);
    return newErrors.every(
      (qualErrors) => Object.keys(qualErrors).length === 0
    );
  };

  const handleChange = (index, e) => {
    const { name, value } = e.target;
    const newData = [...data];
    newData[index][name] = value;
    setData(newData);
  };

  const handleAddQualification = () => {
    setData([
      ...data,
      {
        qualification: "",
        institution: "",
        percentage: "",
        passingYear: "",
        country: "",
      },
    ]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form data is valid:", data);
    } else {
      console.log("Form data is invalid:", errors);
    }
    onNext(data);
  };

  return (
    <div className="p-8 bg-white rounded shadow-md max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">
        Educational Background
      </h2>

      <form onSubmit={handleSubmit}>
        {data.map((qual, index) => (
          <div key={index} className="mb-4">
            <h3 className="font-semibold text-gray-800 mb-2">
              Qualification {index + 1}
            </h3>
            {[
              { label: "Qualification", name: "qualification" },
              { label: "Institution/Board/University", name: "institution" },
              { label: "Percentage", name: "percentage" },
              { label: "Passing Year", name: "passingYear" },
              { label: "Country", name: "country" },
            ].map((field) => (
              <div className="mb-4" key={field.name}>
                <label className="block text-gray-700">
                  {field.label} <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name={field.name}
                  value={qual[field.name]}
                  onChange={(e) => handleChange(index, e)}
                  className="w-full p-2 border border-gray-300 rounded mt-1 focus:outline-none focus:border-blue-500 transition duration-300 ease-in-out"
                  required
                />
                {errors[index] && errors[index][field.name] && (
                  <p className="text-red-500 text-sm">
                    {errors[index][field.name]}
                  </p>
                )}
              </div>
            ))}
          </div>
        ))}

        <button
          type="button"
          onClick={handleAddQualification}
          className="w-full bg-green-500 text-white py-2 rounded mb-4 hover:bg-green-600 transition"
        >
          Add Another Qualification
        </button>
        <div className="mb-4">
          <button className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition">
            Submit
          </button>
        </div>
        <div className="mb-4">
          <button onClick={onPrevious} className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition">
            Previous
          </button>
        </div>
      </form>
    </div>
  );
};

export default Educational;
