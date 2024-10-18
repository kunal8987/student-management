import React, { useState } from "react";

const Personal = () => {
  const [formData, setFormData] = useState({
    title: "",
    firstName: "",
    middleName: "",
    lastName: "",
    mobileNo: "",
    emergencyContactNo: "",
    studentEmail: "",
    maritalStatus: "",
    gender: "",
    dateOfBirth: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

   const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
   }
  return (
    <div className="p-8 bg-white rounded shadow-md max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">
        Personal Information
      </h2>

      <form onSubmit={handleSubmit}>
        {[
          {
            label: "Title",
            type: "select",
            name: "title",
            options: ["Mr.", "Ms.", "Mrs."],
          },
          { label: "First Name", type: "text", name: "firstName" },
          { label: "Middle Name", type: "text", name: "middleName" },
          { label: "Last Name", type: "text", name: "lastName" },
          { label: "Mobile No.", type: "tel", name: "mobileNo" },
          {
            label: "Emergency Contact No.",
            type: "tel",
            name: "emergencyContactNo",
          },
          { label: "Student Email ID", type: "email", name: "studentEmail" },
          {
            label: "Marital Status",
            type: "select",
            name: "maritalStatus",
            options: ["Single", "Married"],
          },
          {
            label: "Gender",
            type: "select",
            name: "gender",
            options: ["Male", "Female", "Other"],
          },
          { label: "Date of Birth", type: "date", name: "dateOfBirth" },
        ].map((field) => (
          <div className="mb-4" key={field.name}>
            <label className="block text-gray-700">
              {field.label} <span className="text-red-500">*</span>
            </label>
            {field.type === "select" ? (
              <select
                name={field.name}
                value={formData[field.name]}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded mt-1 focus:outline-none focus:border-blue-500 transition duration-300 ease-in-out"
              >
                <option value="">Select {field.label}</option>
                {field.options.map((option) => (
                  <option value={option} key={option}>
                    {option}
                  </option>
                ))}
              </select>
            ) : (
              <input
                type={field.type}
                name={field.name}
                value={formData[field.name]}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded mt-1 focus:outline-none focus:border-blue-500 transition duration-300 ease-in-out"
                required
              />
            )}
          </div>
        ))}

        <button  className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Personal;
