import React, { useState } from 'react';

const App = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [userData, setUserData] = useState({
    biologicalSex: '',
    bodyweight: '',
    height: '',
    fitnessLevel: 5
  });

  const handleInputChange = (field, value) => {
    setUserData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
      <header>
        <h1 style={{ color: '#333' }}>quicktrain</h1>
      </header>
      <main>
        {currentStep === 1 && (
          <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
            <h2>Step 1: Personal Information</h2>
            <p>Enter your basic information</p>
            
            <div style={{ marginBottom: '20px' }}>
              <label>Biological Sex:</label>
              <div>
                {['Male', 'Female'].map((option) => (
                  <button
                    key={option}
                    onClick={() => handleInputChange('biologicalSex', option)}
                    style={{
                      margin: '5px',
                      padding: '10px 15px',
                      border: userData.biologicalSex === option ? '2px solid #f59e0b' : '1px solid #ccc',
                      backgroundColor: userData.biologicalSex === option ? '#fffbeb' : 'white',
                      borderRadius: '4px',
                      cursor: 'pointer'
                    }}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>

            <div style={{ marginBottom: '20px' }}>
              <label>Bodyweight (kg):</label>
              <input
                type="number"
                value={userData.bodyweight}
                onChange={(e) => handleInputChange('bodyweight', e.target.value)}
                style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '4px' }}
              />
            </div>

            <div style={{ marginBottom: '20px' }}>
              <label>Height (cm):</label>
              <input
                type="number"
                value={userData.height}
                onChange={(e) => handleInputChange('height', e.target.value)}
                style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '4px' }}
              />
            </div>

            <div style={{ marginBottom: '20px' }}>
              <label>Fitness Level: {userData.fitnessLevel} hours/week</label>
              <input
                type="range"
                min="0"
                max="28"
                value={userData.fitnessLevel}
                onChange={(e) => handleInputChange('fitnessLevel', parseInt(e.target.value))}
                style={{ width: '100%' }}
              />
            </div>

            <button
              onClick={() => setCurrentStep(2)}
              disabled={!userData.biologicalSex || !userData.bodyweight || !userData.height}
              style={{
                width: '100%',
                padding: '12px',
                backgroundColor: (!userData.biologicalSex || !userData.bodyweight || !userData.height) ? '#ccc' : '#f59e0b',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: (!userData.biologicalSex || !userData.bodyweight || !userData.height) ? 'not-allowed' : 'pointer'
              }}
            >
              Continue
            </button>
          </div>
        )}
        {currentStep === 2 && (
          <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
            <h2>Step 2: Select Your Goal</h2>
            <p>Choose your fitness objective</p>
            <button onClick={() => setCurrentStep(1)}>Back</button>
          </div>
        )}
        {currentStep === 3 && (
          <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
            <h2>Step 3: Your Routines</h2>
            <p>Your personalized routines</p>
            <button onClick={() => setCurrentStep(1)}>Start Over</button>
          </div>
        )}
      </main>
    </div>
  );
};

export default App;