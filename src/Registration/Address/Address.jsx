import React, { useState, useEffect } from "react";

const Address = () => {
  const [accordionOpen, setAccordionOpen] = useState({
    address: false,
    passport: false,
  });

  const [formData, setFormData] = useState(() => {
    const savedData = localStorage.getItem("addressAndPassportInfo");
    return savedData
      ? JSON.parse(savedData)
      : {
          nativeCountry: "",
          nativeState: "",
          nativeCity: "",
          postalCode: "",
          passportNo: "",
          passportExpiry: "",
        };
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    localStorage.setItem("addressAndPassportInfo", JSON.stringify(formData));
  }, [formData]);

  const validate = () => {
    let newErrors = {};

    if (!formData.nativeCountry)
      newErrors.nativeCountry = "Native Country is required";
    if (!formData.nativeState)
      newErrors.nativeState = "Native State is required";
    if (!formData.nativeCity) newErrors.nativeCity = "Native City is required";
    if (!formData.postalCode) newErrors.postalCode = "Postal Code is required";
    if (!formData.passportNo) newErrors.passportNo = "Passport No. is required";
    if (!formData.passportExpiry)
      newErrors.passportExpiry = "Passport Expiry is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form data is valid:", formData);
    } else {
      console.log("Form data is invalid:", errors);
    }
  };

  const toggleAccordion = (section) => {
    setAccordionOpen({ ...accordionOpen, [section]: !accordionOpen[section] });
  };

  return (
    <div className="p-8 bg-white rounded shadow-md max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">
        Address & Passport Information
      </h2>

      <form onSubmit={handleSubmit}>
        <div>
          <div className="mb-2">
            <button
              className="w-full text-left bg-gray-200 p-4 rounded focus:outline-none focus:bg-gray-300"
              onClick={() => toggleAccordion("address")}
            >
              Address Information
            </button>
            {accordionOpen.address && (
              <div className="p-4 border-t border-gray-200 transition duration-300 ease-in-out">
                {[
                  {
                    label: "Native Country",
                    type: "select",
                    name: "nativeCountry",
                    options: ["India", "USA", "UK"],
                  },
                  {
                    label: "Native State",
                    type: "select",
                    name: "nativeState",
                    options: ["Maharashtra", "California", "London"],
                  },
                  {
                    label: "Native City",
                    type: "select",
                    name: "nativeCity",
                    options: ["Nagpur", "Los Angeles", "City of London"],
                  },
                  { label: "Postal Code", type: "text", name: "postalCode" },
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
                    {errors[field.name] && (
                      <p className="text-red-500 text-sm">
                        {errors[field.name]}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="mb-2">
            <button
              className="w-full text-left bg-gray-200 p-4 rounded focus:outline-none focus:bg-gray-300"
              onClick={() => toggleAccordion("passport")}
            >
              Passport Information
            </button>
            {accordionOpen.passport && (
              <div className="p-4 border-t border-gray-200 transition duration-300 ease-in-out">
                {[
                  { label: "Passport No.", type: "text", name: "passportNo" },
                  {
                    label: "Passport Expiry",
                    type: "date",
                    name: "passportExpiry",
                  },
                ].map((field) => (
                  <div className="mb-4" key={field.name}>
                    <label className="block text-gray-700">
                      {field.label} <span className="text-red-500">*</span>
                    </label>
                    <input
                      type={field.type}
                      name={field.name}
                      value={formData[field.name]}
                      onChange={handleChange}
                      className="w-full p-2 border border-gray-300 rounded mt-1 focus:outline-none focus:border-blue-500 transition duration-300 ease-in-out"
                      required
                    />
                    {errors[field.name] && (
                      <p className="text-red-500 text-sm">
                        {errors[field.name]}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <button className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Address;
