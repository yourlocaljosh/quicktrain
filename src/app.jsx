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

  const resetForm = () => {
    setCurrentStep(1);
    setUserData({
      biologicalSex: '',
      bodyweight: '',
      height: '',
      fitnessLevel: 5
    });
    setSelectedGoal('');
  };

  const fitnessGoals = [
    { id: 'basic', title: 'Basic Fitness', description: 'Improve overall health and wellness' },
    { id: 'strength', title: 'Strength Training', description: 'Build functional muscle strength' },
    { id: 'bodybuilding', title: 'Bodybuilding', description: 'Develop muscle mass and definition' },
    { id: 'athletic', title: 'Athletic Training', description: 'Enhance sports performance' },
    { id: 'balanced', title: 'Balanced', description: 'Combination of strength, cardio, and flexibility' }
  ];

  const routines = [
    { id: 1, name: 'Beginner Routine', difficulty: 'Easy', duration: '4 weeks' },
    { id: 2, name: 'Intermediate Routine', difficulty: 'Medium', duration: '8 weeks' },
    { id: 3, name: 'Advanced Routine', difficulty: 'Hard', duration: '12 weeks' }
  ];

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      <header>
        <h1 style={{ color: '#333' }}>quicktrain</h1>
      </header>
      <main>
        {currentStep === 1 && (
          <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
            <div style={{ textAlign: 'center', marginBottom: '20px' }}>
              <h2>Step 1: Personal Information</h2>
              <p style={{ color: '#666' }}>Enter your basic information</p>
            </div>
            
            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold', color: '#333' }}>Biological Sex:</label>
              <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
                {['Male', 'Female', 'Other'].map((option) => (
                  <button
                    key={option}
                    onClick={() => handleInputChange('biologicalSex', option)}
                    style={{
                      padding: '12px 20px',
                      border: userData.biologicalSex === option ? '2px solid #f59e0b' : '1px solid #ccc',
                      backgroundColor: userData.biologicalSex === option ? '#fffbeb' : 'white',
                      borderRadius: '6px',
                      cursor: 'pointer',
                      fontWeight: userData.biologicalSex === option ? 'bold' : 'normal'
                    }}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold', color: '#333' }}>Bodyweight (kg):</label>
                <input
                  type="number"
                  value={userData.bodyweight}
                  onChange={(e) => handleInputChange('bodyweight', e.target.value)}
                  style={{ width: '100%', padding: '12px', border: '1px solid #ccc', borderRadius: '6px' }}
                />
              </div>

              <div>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold', color: '#333' }}>Height (cm):</label>
                <input
                  type="number"
                  value={userData.height}
                  onChange={(e) => handleInputChange('height', e.target.value)}
                  style={{ width: '100%', padding: '12px', border: '1px solid #ccc', borderRadius: '6px' }}
                />
              </div>
            </div>

            <div style={{ marginBottom: '25px' }}>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold', color: '#333' }}>Fitness Level: {userData.fitnessLevel} hours/week</label>
              <input
                type="range"
                min="0"
                max="28"
                value={userData.fitnessLevel}
                onChange={(e) => handleInputChange('fitnessLevel', parseInt(e.target.value))}
                style={{ width: '100%' }}
              />
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', color: '#666', marginTop: '5px' }}>
                <span>0 hrs</span>
                <span>28 hrs</span>
              </div>
            </div>

            <button
              onClick={() => setCurrentStep(2)}
              disabled={!userData.biologicalSex || !userData.bodyweight || !userData.height}
              style={{
                width: '100%',
                padding: '14px',
                backgroundColor: (!userData.biologicalSex || !userData.bodyweight || !userData.height) ? '#ccc' : '#f59e0b',
                color: 'white',
                border: 'none',
                borderRadius: '6px',
                cursor: (!userData.biologicalSex || !userData.bodyweight || !userData.height) ? 'not-allowed' : 'pointer',
                fontWeight: 'bold',
                fontSize: '16px'
              }}
            >
              Continue
            </button>
          </div>
        )}
        {currentStep === 2 && (
          <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
            <div style={{ textAlign: 'center', marginBottom: '20px' }}>
              <h2>Step 2: Select Your Goal</h2>
              <p style={{ color: '#666' }}>Choose the fitness path that matches your objectives</p>
            </div>
            
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
            <div style={{ textAlign: 'center', marginBottom: '20px' }}>
              <h2>Your Personalized Routines</h2>
              <p style={{ color: '#666' }}>
                Based on your profile, here are 3 routines tailored for your <span style={{ fontWeight: 'bold', color: '#f59e0b' }}>{selectedGoal}</span> goal
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', marginBottom: '30px' }}>
              {routines.map((routine) => (
                <div
                  key={routine.id}
                  style={{
                    border: '1px solid #e5e7eb',
                    borderRadius: '8px',
                    padding: '20px',
                    textAlign: 'center',
                    backgroundColor: 'white'
                  }}
                >
                  <div style={{ width: '60px', height: '60px', backgroundColor: '#fffbeb', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 15px' }}>
                    <span style={{ fontSize: '24px', fontWeight: 'bold', color: '#f59e0b' }}>{routine.id}</span>
                  </div>
                  <h3 style={{ margin: '0 0 10px 0', color: '#333' }}>{routine.name}</h3>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px', color: '#666' }}>
                    <span>Difficulty: {routine.difficulty}</span>
                    <span>{routine.duration}</span>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ textAlign: 'center' }}>
              <button
                onClick={resetForm}
                style={{
                  padding: '12px 24px',
                  backgroundColor: '#f59e0b',
                  color: 'white',
                  border: 'none',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  fontWeight: 'bold'
                }}
              >
                Generate New Routines
              </button>
              <p style={{ color: '#999', fontSize: '14px', marginTop: '10px' }}>
                These routines are customized based on your biometrics and fitness goals
              </p>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default App;