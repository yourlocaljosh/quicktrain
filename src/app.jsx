import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Header from './header';
import { routineTemplates } from './data/routines';
import { exerciseMap } from './data/exercises';

const App = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedRoutine, setSelectedRoutine] = useState(null);
  const [userData, setUserData] = useState({
    gender: '',
    bodyweight: '',
    bodyweightUnit: 'lbs',
    height: '',
    heightFeet: '',
    heightInches: '',
    heightUnit: 'in',
    fitnessLevel: 5
  });
  const [selectedGoal, setSelectedGoal] = useState('');

  const navigate = useNavigate();

  const filteredRoutines = routineTemplates.filter(
    (routine) => routine.time <= userData.fitnessLevel
  );

  const handleInputChange = (field, value) => {
    setUserData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleGoalSelect = (goal) => {
    setSelectedGoal(goal);
    setTimeout(() => setCurrentStep(3), 300);
  };

  const resetForm = () => {
    setCurrentStep(1);
    setUserData({
      gender: '',
      bodyweight: '',
      bodyweightUnit: 'lbs',
      height: '',
      heightFeet: '',
      heightInches: '',
      heightUnit: 'in',
      fitnessLevel: 5
    });
    setSelectedGoal('');
  };

  const fitnessGoals = [
    { id: 'bulk', title: 'Weight Gain', description: 'I want to gain weight while exercising.' },
    { id: 'cut', title: 'Weight Loss', description: 'I want to lose bodyweight while exercising.' },
    { id: 'maintain', title: 'Maintenance', description: 'I want to maintain my current bodyweight.' },
    
  ];

  function calculateBMI(weight, height, weightUnit, heightUnit) {
    let w = parseFloat(weight);
    let hMeters = 0;

    if(weightUnit === 'lbs'){
      w = w * 0.453592;
    }

    if(typeof height === 'object'){
      const feet = parseFloat(height.feet) || 0;
      const inches = parseFloat(height.inches) || 0;
      hMeters = (feet * 12 + inches) * 0.0254;
    }else{
      if(heightUnit === 'cm'){
        hMeters = height / 100;
      }else{
        hMeters = height * 0.0254;
      }
    }

    if(!w || !hMeters){
      return null;
    }
    return w / (hMeters * hMeters);
  }

  function calculateTDEE(weight, height, unit, gender = 'male', activityMultiplier = 1.55) {
    let w = parseFloat(weight);
    let h = parseFloat(height);
    const age = 25;
    let genderConstant = gender === 'female' ? -161 : 5;

    if(unit === 'lbs'){
      w = w * 0.453592;
    }

    if(h < 100){
      h = h * 2.54;
    }

    const tdee = 10 * w + 6.25 * h - 5 * age + genderConstant;
    return Math.round(tdee * activityMultiplier);
  }

  function getCalorieSuggestions(tdee, goal) {
    if(goal === 'bulk'){
      return [
        { label: 'Gain 0.5 lbs/week', value: tdee + 250 },
        { label: 'Gain 1.0 lbs/week', value: tdee + 500 }
      ];
    }
    if(goal === 'cut'){
      return [
        { label: 'Lose 0.5 lbs/week', value: tdee - 250 },
        { label: 'Lose 1.0 lbs/week', value: tdee - 500 }
      ];
    }
    return [
      { label: 'Maintain weight', value: tdee }
    ];
  }

  let bmi = null, tdee = null, calorieSuggestions = [];
  if(userData.bodyweight &&
    ((userData.height && userData.heightUnit === 'cm') 
    || (userData.heightFeet && userData.heightUnit === 'in'))
  ){
    let heightValue;
    if(userData.heightUnit === 'cm'){
      heightValue = userData.height;
    }else{
      heightValue = { feet: userData.heightFeet, inches: userData.heightInches };
    }
    bmi = calculateBMI(userData.bodyweight, heightValue, userData.bodyweightUnit, userData.heightUnit);

    let heightForTDEE;
    if(userData.heightUnit === 'cm'){
      heightForTDEE = userData.height;
    }else{
      heightForTDEE = (parseInt(userData.heightFeet || 0) * 12 + parseInt(userData.heightInches || 0));
    }

    let genderForTDEE;
    if(userData.gender === 'male' 
      || userData.gender === 'female'){
      genderForTDEE = userData.gender;
    }else{
      genderForTDEE = 'male';
    }

    const activityMultiplier = 1.55;

    tdee = calculateTDEE(
      userData.bodyweight,
      heightForTDEE,
      userData.bodyweightUnit,
      genderForTDEE,
      activityMultiplier
    );
    calorieSuggestions = getCalorieSuggestions(tdee, selectedGoal);
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="max-w-4xl mx-auto px-4 py-8">
        <AnimatePresence mode="wait">
          {currentStep === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl shadow-lg p-8"
            >
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Get Started</h2>
                <p className="text-gray-600">Tell us about yourself to get a routine that matches you.</p>
              </div>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Gender
                  </label>
                  <div className="flex space-x-4">
                    <button
                      type="button"
                      className={`px-4 py-2 rounded-lg border ${userData.gender === 'male' ? 'bg-amber-500 text-white border-amber-500' : 'bg-white text-gray-700 border-gray-200'}`}
                      onClick={() => handleInputChange('gender', 'male')}
                    >
                      Male
                    </button>
                    <button
                      type="button"
                      className={`px-4 py-2 rounded-lg border ${userData.gender === 'female' ? 'bg-amber-500 text-white border-amber-500' : 'bg-white text-gray-700 border-gray-200'}`}
                      onClick={() => handleInputChange('gender', 'female')}
                    >
                      Female
                    </button>
                    <button
                      type="button"
                      className={`px-4 py-2 rounded-lg border ${userData.gender === 'other' ? 'bg-amber-500 text-white border-amber-500' : 'bg-white text-gray-700 border-gray-200'}`}
                      onClick={() => handleInputChange('gender', 'other')}
                    >
                      Other
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2 px-1">
                      Bodyweight
                    </label>
                    <div className="flex space-x-2 px-1">
                      <div className="flex-grow flex items-center space-x-1">
                        <input
                          type="number"
                          value={userData.bodyweight}
                          onChange={(e) => handleInputChange('bodyweight', e.target.value)}
                          className="flex-grow max-w-full px-3 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                          placeholder="Enter your weight"
                        />
                      </div>
                      <select
                        value={userData.bodyweightUnit || 'lbs'}
                        onChange={(e) => handleInputChange('bodyweightUnit', e.target.value)}
                        className="w-24 px-3 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent bg-white flex-shrink-0"
                      >
                        <option value="lbs">lbs</option>
                        <option value="kg">kg</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Height
                    </label>
                    <div className="grid grid-cols-[1fr_auto] gap-2">
                      <div className="flex space-x-3">
                        {userData.heightUnit === 'in' ? (
                          <>
                            <input
                              type="number"
                              value={userData.heightFeet || ''}
                              onChange={(e) => handleInputChange('heightFeet', e.target.value)}
                              className="w-32 px-3 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                              placeholder="Enter ft"
                            />
                            <input
                              type="number"
                              value={userData.heightInches || ''}
                              onChange={(e) => handleInputChange('heightInches', e.target.value)}
                              className="w-36 px-3 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                              placeholder="Enter in"
                            />
                          </>
                        ) : (
                          <input
                            type="number"
                            value={userData.height}
                            onChange={(e) => handleInputChange('height', e.target.value)}
                            className="flex-grow min-w-0 px-3 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                            placeholder="Enter height"
                          />
                        )}
                      </div>
                      <select
                        value={userData.heightUnit || 'in'}
                        onChange={(e) => handleInputChange('heightUnit', e.target.value)}
                        className="w-24 px-3 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent bg-white"
                      >
                        <option value="in">in</option>
                        <option value="cm">cm</option>
                      </select>
                    </div>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    How many hours a week do you want to spend exercising? {userData.fitnessLevel} hours per week
                  </label>
                  <input
                    type="range"
                    min="0"
                    max="14"
                    value={userData.fitnessLevel}
                    onChange={(e) => handleInputChange('fitnessLevel', parseInt(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>0 hours</span>
                    <span>14+ hours</span>
                  </div>
                </div>
                
                <button
                  onClick={() => setCurrentStep(2)}
                  disabled={
                    !userData.bodyweight ||
                    (userData.heightUnit === 'in'
                      ? (!userData.heightFeet && !userData.heightInches) // Require at least one of feet or inches if unit is 'in'
                      : !userData.height) // Require height if unit is 'cm'
                  }
                  className="w-full bg-amber-500 hover:bg-amber-600 disabled:bg-gray-300 text-white font-semibold py-4 px-6 rounded-lg transition-colors duration-200"
                >
                  Continue
                </button>
              </div>
            </motion.div>
          )}

          {currentStep === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl shadow-lg p-8"
            >
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">What matches your goal?</h2>
                <p className="text-gray-600">Choose the path that matches your objectives the closest.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {fitnessGoals.map((goal) => (
                  <motion.button
                    key={goal.id}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleGoalSelect(goal.id)}
                    className="p-6 border-2 border-gray-200 rounded-xl hover:border-amber-300 hover:bg-amber-50 transition-all duration-200 text-left"
                  >
                    <h3 className="font-semibold text-lg text-gray-900 mb-2">{goal.title}</h3>
                    <p className="text-gray-600 text-sm">{goal.description}</p>
                  </motion.button>
                ))}
              </div>

              <div className="mt-8 text-center">
                <button
                  onClick={() => setCurrentStep(1)}
                  className="text-gray-500 hover:text-gray-700 transition-colors duration-200"
                >
                  ← Back to personal info
                </button>
              </div>
            </motion.div>
          )}

          
          {currentStep === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl shadow-lg p-8"
            >
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Your Personalized Routines</h2>
                <p className="text-gray-600">
                  These are three routines that align with your chosen path.
                </p>
              </div>
              {bmi && (
                <div className="mb-6 p-4 bg-amber-50 rounded-lg text-gray-800">
                  <div><strong>BMI:</strong> {bmi.toFixed(1)}</div>
                  <div className="mt-2"><strong>Suggested Daily Calories:</strong></div>
                  <ul className="list-disc list-inside">
                    {calorieSuggestions.map((s, idx) => {
                      let label = s.label;
                      if(userData.bodyweightUnit === 'kg'){
                        label = label.replace('lbs', 'kg');
                      }
                      return (
                        <li key={idx}>
                          {label}: <span className="font-semibold">{s.value} calories/day</span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              )}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {routineTemplates.map((routine) => (
                  <motion.div
                    key={routine.id}
                    whileHover={{ y: -5 }}
                    className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-all duration-200"
                  >
                    <div className="text-center">
                      <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl font-bold text-amber-600">{routine.id}</span>
                      </div>
                      <h3 className="font-semibold text-lg text-gray-900 mb-2">{routine.name}</h3>
                      <p className="text-gray-600 text-sm mb-2">{routine.description}</p>
                      <div className="flex justify-between text-sm text-gray-600">
                        <span>{routine.duration}</span>
                      </div>
                      <button
                        className="mt-4 bg-amber-500 hover:bg-amber-600 text-white font-semibold py-2 px-4 rounded transition-colors duration-200"
                        onClick={() => {
                          setCurrentStep(4);
                          setSelectedRoutine(routine);
                        }}
                      >
                        View Details
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="text-center space-y-4">
                <button
                  onClick={resetForm}
                  className="bg-amber-500 hover:bg-amber-600 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
                >
                  Restart
                </button>
                <p className="text-gray-500 text-sm">
                  These routines are customized based on your biometrics and fitness goals
                </p>
              </div>
            </motion.div>
          )}

          {currentStep === 4 && selectedRoutine && (
            <motion.div
              key="step4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl shadow-lg p-8"
            >
              {bmi && (
                <div className="mb-6 p-4 bg-amber-50 rounded-lg text-gray-800">
                  <div><strong>BMI:</strong> {bmi.toFixed(1)}</div>
                  <div className="mt-2"><strong>Suggested Caloric Intake:</strong></div>
                  <ul className="list-disc list-inside">
                    {calorieSuggestions.map((s, idx) => (
                      <li key={idx}>
                        {s.label.replace('lbs', userData.bodyweightUnit === 'kg' ? 'kg' : 'lbs')}:
                        <span className="font-semibold"> {s.value} kcal/day</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">{selectedRoutine.name}</h2>
                <p className="text-gray-600 mb-2">{selectedRoutine.description}</p>
                <div className="flex justify-center gap-6 text-sm text-gray-600 mb-4">
                  <span className="px-3 py-1 bg-amber-100 rounded-full">{selectedRoutine.frequency}</span>
                  <span className="px-3 py-1 bg-amber-100 rounded-full">{selectedRoutine.split}</span>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="font-semibold text-lg text-gray-900 mb-4">Routine Overview</h3>
                <ul className="space-y-4">
                  {selectedRoutine.workouts.map((workout, idx) => (
                    <li key={idx} className="border border-gray-200 rounded-lg p-4">
                      <div className="font-semibold text-amber-600 mb-2">
                        {typeof workout.day === 'number' ? `Day ${workout.day}` : workout.day}
                      </div>
                      <ul className="list-disc list-inside text-gray-700">
                        {workout.exercises.map((ex, i) => {
                          const exercise = exerciseMap[ex.exerciseId];
                          return (
                            <li key={i}>
                              <span className="font-medium">{exercise ? exercise.name : ex.exerciseId}</span>
                              {exercise && exercise.primaryMuscle && (
                                <span className="ml-2 text-xs text-gray-500">({exercise.primaryMuscle})</span>
                              )}
                              {/* Optionally add sets/reps/rest here */}
                              {ex.sets && (
                                <span className="ml-2 text-xs text-gray-600">
                                  — {ex.sets} sets × {ex.reps} reps (Rest: {ex.rest})
                                </span>
                              )}
                            </li>
                          );
                        })}
                      </ul>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <button
                  onClick={() => setCurrentStep(3)}
                  className="text-gray-500 hover:text-gray-700 transition-colors duration-200"
                >
                  ← Back to routines
                </button>
                <button
                  onClick={resetForm}
                  className="bg-amber-500 hover:bg-amber-600 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
                >
                  Restart
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: #f59e0b;
          cursor: pointer;
          box-shadow: 0 2px 4px rgba(0,0,0,0.2);
        }
        .slider::-moz-range-thumb {
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: #f59e0b;
          cursor: pointer;
          border: none;
          box-shadow: 0 2px 4px rgba(0,0,0,0.2);
        }
      `}</style>
    </div>
  );
};

export default App;