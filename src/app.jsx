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

  const handleInputChange = (field, value) => {
    setUserData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleGoalSelect = (goal) => {
    setSelectedGoal(goal);
    setCurrentStep(3);
  };

  const fitnessGoals = [
    { id: 'basic', title: 'Basic Fitness', description: 'Improve overall health and wellness' },
    { id: 'strength', title: 'Strength Training', description: 'Build functional muscle strength' },
    { id: 'bodybuilding', title: 'Bodybuilding', description: 'Develop muscle mass and definition' },
    { id: 'athletic', title: 'Athletic Training', description: 'Enhance sports performance' },
    { id: 'balanced', title: 'Balanced', description: 'Combination of strength, cardio, and flexibility' }
  ];

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      <header>
        <h1 style={{ color: '#333' }}>quicktrain</h1>
      </header>
      <main>
        {currentStep === 1 && (
          <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
            <h2>Step 1: Personal Information</h2>
            <p>Enter your basic information</p>
            
            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>Biological Sex:</label>
              <div>
                {['Male', 'Female', 'Other'].map((option) => (
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
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>Bodyweight (kg):</label>
              <input
                type="number"
                value={userData.bodyweight}
                onChange={(e) => handleInputChange('bodyweight', e.target.value)}
                style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '4px' }}
              />
            </div>

            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>Height (cm):</label>
              <input
                type="number"
                value={userData.height}
                onChange={(e) => handleInputChange('height', e.target.value)}
                style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '4px' }}
              />
            </div>

            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>Fitness Level: {userData.fitnessLevel} hours/week</label>
              <input
                type="range"
                min="0"
                max="28"
                value={userData.fitnessLevel}
                onChange={(e) => handleInputChange('fitnessLevel', parseInt(e.target.value))}
                style={{ width: '100%' }}
              />
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', color: '#666' }}>
                <span>0 hrs</span>
                <span>28 hrs</span>
              </div>
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
                cursor: (!userData.biologicalSex || !userData.bodyweight || !userData.height) ? 'not-allowed' : 'pointer',
                fontWeight: 'bold'
              }}
            >
              Continue
            </button>
          </div>
        )}
        {currentStep === 2 && (
          <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
            <h2>Step 2: Select Your Goal</h2>
            <p>Choose the fitness path that matches your objectives</p>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '15px', marginTop: '20px' }}>
              {fitnessGoals.map((goal) => (
                <button
                  key={goal.id}
                  onClick={() => handleGoalSelect(goal.id)}
                  style={{
                    padding: '20px',
                    border: '2px solid #e5e7eb',
                    borderRadius: '8px',
                    backgroundColor: 'white',
                    textAlign: 'left',
                    cursor: 'pointer',
                    transition: 'all 0.2s'
                  }}
                  onMouseOver={(e) => e.target.style.borderColor = '#f59e0b'}
                  onMouseOut={(e) => e.target.style.borderColor = '#e5e7eb'}
                >
                  <h3 style={{ margin: '0 0 8px 0', color: '#333' }}>{goal.title}</h3>
                  <p style={{ margin: 0, color: '#666', fontSize: '14px' }}>{goal.description}</p>
                </button>
              ))}
            </div>

            <div style={{ marginTop: '20px', textAlign: 'center' }}>
              <button 
                onClick={() => setCurrentStep(1)}
                style={{ color: '#666', background: 'none', border: 'none', cursor: 'pointer' }}
              >
                ← Back to personal info
              </button>
            </div>
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