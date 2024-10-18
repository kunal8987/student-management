import React from "react";

const FinalReview = ({
  personalInfo,
  addressInfo,
  academicInfo,
  educationInfo,
  documentInfo,
  onSubmit,
   onPrevious 
}) => {
  const handleConfirm = () => {
    if (window.confirm("Are you sure you want to submit?")) {
      onSubmit();
    }
  };

  return (
    <div className="p-8 bg-white rounded shadow-md max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-center text-gray-800 animate-fadeIn">
        Final Review
      </h2>

      <div className="animate-fadeIn">
        <h3 className="font-semibold text-gray-800 mb-2">
          Personal Information
        </h3>
        <p>Title: {personalInfo.title}</p>
        <p>
          Name: {personalInfo.firstName} {personalInfo.middleName}{" "}
          {personalInfo.lastName}
        </p>
        <p>Mobile No.: {personalInfo.mobileNo}</p>
        <p>Email: {personalInfo.studentEmail}</p>
        <p>Marital Status: {personalInfo.maritalStatus}</p>
        <p>Gender: {personalInfo.gender}</p>
        <p>Date of Birth: {personalInfo.dateOfBirth}</p>

        <h3 className="font-semibold text-gray-800 mb-2 mt-4">
          Address & Passport Information
        </h3>
        <p>Native Country: {addressInfo.nativeCountry}</p>
        <p>Native State: {addressInfo.nativeState}</p>
        <p>Native City: {addressInfo.nativeCity}</p>
        <p>Postal Code: {addressInfo.postalCode}</p>
        <p>Passport No.: {addressInfo.passportNo}</p>
        <p>Passport Expiry: {addressInfo.passportExpiry}</p>

        <h3 className="font-semibold text-gray-800 mb-2 mt-4">
          Academic Interests
        </h3>
        <p>Interested Country: {academicInfo.interestedCountry}</p>
        <p>English Proficiency Test: {academicInfo.englishProficiencyTest}</p>
        <p>Test Score: {academicInfo.testScore}</p>

        <h3 className="font-semibold text-gray-800 mb-2 mt-4">
          Educational Background
        </h3>
        {educationInfo.map((edu, index) => (
          <div key={index}>
            <p>Qualification {index + 1}:</p>
            <p>Qualification: {edu.qualification}</p>
            <p>Institution: {edu.institution}</p>
            <p>Percentage: {edu.percentage}</p>
            <p>Passing Year: {edu.passingYear}</p>
            <p>Country: {edu.country}</p>
          </div>
        ))}

        <h3 className="font-semibold text-gray-800 mb-2 mt-4">Documents</h3>
        {Object.keys(documentInfo).map((key) => (
          <div key={key}>
            <p>
              {key.replace(/([A-Z])/g, " $1").trim()}:{" "}
              {documentInfo[key] ? documentInfo[key].name : "Not uploaded"}
            </p>
          </div>
        ))}
      </div>

      <button
        onClick={handleConfirm}
        className="w-full bg-blue-500 text-white py-2 rounded mt-4 hover:bg-blue-600 transition transform hover:scale-105 animate-bounce"
      >
        Submit
      </button>
      <button onClick={onPrevious} className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition">
        Previous
        </button>
    </div>
  );
};

export default FinalReview;
