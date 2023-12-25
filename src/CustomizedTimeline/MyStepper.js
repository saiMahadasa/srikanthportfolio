import React, { useState } from 'react';
import Stepper from 'react-stepper-horizontal';
import './MyStepper.css'; // Import your CSS file for custom styles

const MyStepper = () => {
  const [steps, setSteps] = useState([
    { title: 'Project Management Professional' },
    { title: 'Certified MicroStrategy Expert' },
    { title: 'Certified Scrum Master (CSM)' },
    { title: 'SIX Sigma Green Belt' },
    { title: 'Cisco Certified Data Analytics Essentials' },
  ]);

  const [currentStep, setCurrentStep] = useState(0);

  const handleStepChange = (step) => {
    setCurrentStep(step);
  };

  return (
    <div>
      <p className = 'aboutmehead'>Certifications</p>
      <Stepper
  steps={steps}
  activeStep={currentStep}
  activeColor="rgb(224, 224, 224)" 

  completeColor="#212529"
  size={32}
  circleFontSize={14} // Adjust the font size as needed
  activeTitleColor="#212529"
  completeTitleColor="#212529"
  completeBarColor="#212529"
  defaultTitleColor="#000000 !important" // Set inactive title color to black
  defaultBarColor="#000000 !important" // Set inactive bar color to black
  onClick={(step) => handleStepChange(step)}
  className="custom-stepper" // Add a custom class for styling
/>

    </div>
  );
};

export default MyStepper;
