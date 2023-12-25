// CertificationContext.js
import React, { createContext, useContext, useState } from 'react';

const CertificationContext = createContext();

export const CertificationContextProvider = ({ children }) => {
  const [currentStep, setCurrentStep] = useState(0);

  const contextValue = {
    currentStep,
    setCurrentStep,
  };

  return <CertificationContext.Provider value={contextValue}>{children}</CertificationContext.Provider>;
};

export const useCertificationContext = () => {
  const context = useContext(CertificationContext);
  if (!context) {
    throw new Error('useCertificationContext must be used within a CertificationContextProvider');
  }
  return context;
};
