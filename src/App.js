import React, { useState } from "react";
import Home from "./Home/Home";
import PersonalInfo from "./Registration/Personal Info/Personal";
import Address from "./Registration/Address/Address";
import Academic from "./Registration/Academic/Academic";
import Educational from "./Registration/Educational/Educational";
import DocumentUpload from "./Registration/DocumentUpload/DocumentUpload";
import FinalReview from "./Registration/FinalReview/FinalReview";
import ConfirmationNextSteps from "./Registration/ConfirmationNextSteps/ConfirmationNextSteps";

const App = () => {
  const [step, setStep] = useState(0);
  const [personalInfo, setPersonalInfo] = useState({});
  const [addressInfo, setAddressInfo] = useState({});
  const [academicInfo, setAcademicInfo] = useState({});
  const [educationInfo, setEducationInfo] = useState([]);
  const [documentInfo, setDocumentInfo] = useState({});

  const handleNextStep = (data) => {
    switch (step) {
      case 1:
        setPersonalInfo(data);
        break;
      case 2:
        setAddressInfo(data);
        break;
      case 3:
        setAcademicInfo(data);
        break;
      case 4:
        setEducationInfo(data);
        break;
      case 5:
        setDocumentInfo(data);
        break;
      default:
        break;
    }
    setStep(step + 1);
  };

  const handlePreviousStep = () => {
    setStep(step - 1);
  };

  const handleSubmit = () => {
    console.log("Form submitted:", {
      personalInfo,
      addressInfo,
      academicInfo,
      educationInfo,
      documentInfo,
    });
    setStep(step + 1); // Go to confirmation step
  };

  return (
    <div>
      {step === 0 && <Home onNext={() => setStep(1)} />}
      {step === 1 && (
        <PersonalInfo onNext={handleNextStep} onPrevious={handlePreviousStep} />
      )}
      {step === 2 && (
        <Address onNext={handleNextStep} onPrevious={handlePreviousStep} />
      )}
      {step === 3 && (
        <Academic onNext={handleNextStep} onPrevious={handlePreviousStep} />
      )}
      {step === 4 && (
        <Educational onNext={handleNextStep} onPrevious={handlePreviousStep} />
      )}
      {step === 5 && (
        <DocumentUpload
          onNext={handleNextStep}
          onPrevious={handlePreviousStep}
        />
      )}
      {step === 6 && (
        <FinalReview
          personalInfo={personalInfo}
          addressInfo={addressInfo}
          academicInfo={academicInfo}
          educationInfo={educationInfo}
          documentInfo={documentInfo}
          onSubmit={handleSubmit}
          onPrevious={handlePreviousStep}
        />
      )}
      {step === 7 && (
        <ConfirmationNextSteps
          summary={{
            personalInfo,
            addressInfo,
            academicInfo,
            educationInfo,
            documentInfo,
          }}
        />
      )}
    </div>
  );
};

export default App;
