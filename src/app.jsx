import React, { useState } from 'react';

const App = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [userData, setUserData] = useState({
    biologicalSex: '',
    bodyweight: '',
    height: '',
    fitnessLevel: 5
  });
  const [selectedGoal, setSelectedGoal] = useState('');

  return (
    <div>
      <header>
        <h1>quicktrain</h1>
      </header>
      <main>
        {currentStep === 1 && (
          <div>
            <h2>Step 1: Personal Information</h2>
            <p>Enter your basic information</p>
          </div>
        )}
        {currentStep === 2 && (
          <div>
            <h2>Step 2: Select Your Goal</h2>
            <p>Choose your fitness objective</p>
          </div>
        )}
        {currentStep === 3 && (
          <div>
            <h2>Step 3: Your Routines</h2>
            <p>Your personalized routines</p>
          </div>
        )}
      </main>
    </div>
  );
};

export default App;