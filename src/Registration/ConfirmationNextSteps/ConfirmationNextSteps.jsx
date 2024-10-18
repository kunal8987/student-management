import React from "react";
import { jsPDF } from "jspdf";

const ConfirmationNextSteps = ({ summary  }) => {
  const handleDownload = () => {
    const doc = new jsPDF();
    let yOffset = 10; // Initial offset for text placement

    const addSection = (title, content) => {
      doc.setFont("Arial", "bold");
      doc.setFontSize(16);
      doc.text(title, 10, yOffset);
      yOffset += 10; // Add space after the section title

      doc.setFont("Arial", "");
      doc.setFontSize(14);
      content.forEach((text, index) => {
        if (yOffset > 280) {
          // Check if we need a new page
          doc.addPage();
          yOffset = 10;
        }
        doc.text(text, 10, yOffset);
        yOffset += 10;
      });
    };

    addSection("Registration Summary", []);
    addSection("Personal Information", [
      `Name: ${summary.personalInfo.firstName} ${summary.personalInfo.middleName} ${summary.personalInfo.lastName}`,
      `Mobile No.: ${summary.personalInfo.mobileNo}`,
      `Email: ${summary.personalInfo.studentEmail}`,
      `Marital Status: ${summary.personalInfo.maritalStatus}`,
      `Gender: ${summary.personalInfo.gender}`,
      `Date of Birth: ${summary.personalInfo.dateOfBirth}`,
    ]);

    addSection("Address & Passport Information", [
      `Native Country: ${summary.addressInfo.nativeCountry}`,
      `Native State: ${summary.addressInfo.nativeState}`,
      `Native City: ${summary.addressInfo.nativeCity}`,
      `Postal Code: ${summary.addressInfo.postalCode}`,
      `Passport No.: ${summary.addressInfo.passportNo}`,
      `Passport Expiry: ${summary.addressInfo.passportExpiry}`,
    ]);

    addSection("Academic Interests", [
      `Interested Country: ${summary.academicInfo.interestedCountry}`,
      `English Proficiency Test: ${summary.academicInfo.englishProficiencyTest}`,
      `Test Score: ${summary.academicInfo.testScore}`,
    ]);

    summary.educationInfo.forEach((edu, index) => {
      addSection(`Educational Background - Qualification ${index + 1}`, [
        `Qualification: ${edu.qualification}`,
        `Institution: ${edu.institution}`,
        `Percentage: ${edu.percentage}`,
        `Passing Year: ${edu.passingYear}`,
        `Country: ${edu.country}`,
      ]);
    });

    addSection(
      "Documents",
      Object.keys(summary.documentInfo).map(
        (key) =>
          `${key.replace(/([A-Z])/g, " $1").trim()}: ${
            summary.documentInfo[key]
              ? summary.documentInfo[key].name
              : "Not uploaded"
          }`
      )
    );

    doc.save("registration-summary.pdf");
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="p-8 bg-white rounded shadow-md max-w-md mx-auto">
      <div className="animate-slideIn">
        <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">
          Submission Successful!
        </h2>
        <p className="text-gray-600 mb-6">
          Congratulations! Your registration has been successfully submitted.
        </p>

        <div className="flex justify-center items-center mb-6">
          <button
            onClick={handleDownload}
            className="bg-blue-500 text-white py-2 px-4 rounded mr-2 hover:bg-blue-600 transition"
          >
            Download Summary
          </button>
          <button
            onClick={handlePrint}
            className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition"
          >
            Print Summary
          </button>
        </div>

        <div className="bg-blue-100 p-4 rounded shadow-sm text-gray-700">
          <h3 className="font-semibold mb-2">Next Steps:</h3>
          <ul className="list-disc list-inside">
            <li>Check your email for a confirmation receipt.</li>
            <li>
              Follow the instructions provided in the email for further process
              steps.
            </li>
            <li>
              If you have any questions, contact our support team at
              support@example.com.
            </li>
          </ul>
        </div>
      </div>

      <div className="animate-confetti">
        <div className="confetti-item"></div>
        <div className="confetti-item"></div>
        <div className="confetti-item"></div>
        <div className="confetti-item"></div>
        <div className="confetti-item"></div>
      </div>

      <style jsx>{`
        .animate-slideIn {
          animation: slideIn 0.5s ease-out forwards;
        }
        .animate-confetti {
          position: relative;
          width: 100%;
          height: 100px;
        }
        .confetti-item {
          width: 10px;
          height: 10px;
          background-color: #ffcc00;
          position: absolute;
          top: 0;
          animation: fall 3s linear infinite;
          animation-delay: calc(var(--i) * 0.1s);
        }
        @keyframes slideIn {
          from {
            transform: translateY(-50px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        @keyframes fall {
          0% {
            transform: translateY(0);
            opacity: 1;
          }
          100% {
            transform: translateY(100px);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default ConfirmationNextSteps;
