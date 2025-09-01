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
    email: '',
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
      email: '',
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

  const disclaimers = [
    { id: 'underweight', text: 'Ease into the workouts, do not push yourself too hard for the first few weeks.'}
  ]

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
                    Email Address (Optional)
                  </label>
                  <input
                    type="email"
                    value={userData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    placeholder="Wgains@email.com"
                  />
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
                    Current Fitness Level: {userData.fitnessLevel} h/week
                  </label>
                  <input
                    type="range"
                    min="0"
                    max="28"
                    value={userData.fitnessLevel}
                    onChange={(e) => handleInputChange('fitnessLevel', parseInt(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>0 hours</span>
                    <span>28+ hours</span>
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
                        <span>{routine.commitment}</span>
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