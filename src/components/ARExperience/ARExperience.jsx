import React, { useState } from 'react';
import ARScene from './ARScene';
import NextPage from './NextPage';

const ARExperience = () => {
  const [validationPassed, setValidationPassed] = useState(false);

  const handleValidationSuccess = () => {
    setValidationPassed(true);
  };

  return (
    <div>
      {!validationPassed ? (
        <ARScene onValidationSuccess={handleValidationSuccess} />
      ) : (
        <NextPage />
      )}
    </div>
  );
};

export default ARExperience;
