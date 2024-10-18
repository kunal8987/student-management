import React, { useState, useEffect } from "react";

const DocumentUpload = ({ onNext, onPrevious }) => {
  const [data, setData] = useState({
    tenthMarksheet: null,
    twelfthMarksheet: null,
    passport: null,
    englishProficiency: null,
    sop: null,
    cv: null,
    experience: null,
    bachelorsDegree: null,
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    // Removed local storage functionality
  }, [data]);

  const handleFileChange = (e, field) => {
    const file = e.target.files[0];
    const validTypes = ["image/jpeg", "image/png", "application/pdf"];
    const maxSize = 5 * 1024 * 1024; // 5 MB

    if (file) {
      if (!validTypes.includes(file.type)) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          [field]: "Invalid file type. Only JPEG, PNG, and PDF are allowed.",
        }));
        setData((prevData) => ({ ...prevData, [field]: null }));
      } else if (file.size > maxSize) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          [field]: "File size exceeds 5 MB limit.",
        }));
        setData((prevData) => ({ ...prevData, [field]: null }));
      } else {
        setErrors((prevErrors) => ({ ...prevErrors, [field]: null }));
        setData((prevData) => ({ ...prevData, [field]: file }));
      }
    }
  };

  
  const handleSubmit = (e) => {
    e.preventDefault();
    const valid = Object.values(data).every((file) => file);
    if (valid) {
      console.log("All files are valid:", data);
    } else {
      console.log("Some files are missing or invalid.");
    }
    onNext(data);
  };

  return (
    <div className="p-8 bg-white rounded shadow-md max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">
        Document Upload
      </h2>
      <form onSubmit={handleSubmit}>
        {[
          { label: "10th Marksheet", name: "tenthMarksheet" },
          { label: "12th Marksheet", name: "twelfthMarksheet" },
          { label: "Passport", name: "passport" },
          {
            label: "English Proficiency Test Certificate",
            name: "englishProficiency",
          },
          { label: "SOP", name: "sop" },
          { label: "CV", name: "cv" },
          { label: "Experience (if applicable)", name: "experience" },
          {
            label: "Bachelor’s Degree (for Master’s applicants)",
            name: "bachelorsDegree",
          },
        ].map((field) => (
          <div className="mb-4" key={field.name}>
            <label className="block text-gray-700">
              {field.label} <span className="text-red-500">*</span>
            </label>
            <input
              type="file"
              accept=".jpg,.jpeg,.png,.pdf"
              onChange={(e) => handleFileChange(e, field.name)}
              className="w-full p-2 border border-gray-300 rounded mt-1 focus:outline-none focus:border-blue-500 transition duration-300 ease-in-out"
            />
            {data[field.name] && (
              <p className="text-green-500 text-sm">
                File uploaded: {data[field.name].name}
              </p>
            )}
            {errors[field.name] && (
              <p className="text-red-500 text-sm">{errors[field.name]}</p>
            )}
          </div>
        ))}
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

export default DocumentUpload;
