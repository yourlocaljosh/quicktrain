import React, { useState } from 'react';
import Header from './header';

const muscleGroups = [
  { id: 'chest', name: 'Chest' },
  { id: 'triceps', name: 'Triceps' },
  { id: 'biceps', name: 'Biceps' },
  { id: 'abs', name: 'Abdominal' },
  { id: 'traps', name: 'Traps' },
  { id: 'lats', name: 'Lats' },
  { id: 'upper_back', name: 'Upper Back' },
  { id: 'lower_back', name: 'Lower Back' },
  { id: 'delts', name: 'Delts' },
  { id: 'quads', name: 'Quadriceps' },
  { id: 'hamstrings', name: 'Hamstrings' },
  { id: 'calves', name: 'Calves' },
];

const Encyclopedia = () => {
  const [selectedMuscleGroup, setSelectedMuscleGroup] = useState(null);

  const handleMuscleGroupClick = (muscleGroup) => {
    setSelectedMuscleGroup(muscleGroup);
  };

  const handleCloseDetail = () => {
    setSelectedMuscleGroup(null);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="max-w-6xl mx-auto px-4 py-8">
        {selectedMuscleGroup ? (
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="flex flex-col lg:flex-row gap-6">
              <div className="lg:w-2/5 flex-shrink-0">
                <div className="bg-gray-100 border-2 border-dashed border-gray-300 rounded-xl w-full h-[500px] flex flex-col items-center justify-center p-4">
                  <div className="bg-gray-200 border-2 border-dashed border-gray-400 rounded-xl w-3/4 h-3/4 flex items-center justify-center mb-4">
                    <span className="text-gray-500 text-lg">{selectedMuscleGroup.name}</span>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-800">{selectedMuscleGroup.name}</h2>
                  <p className="text-gray-600 mt-2 text-center">Insert info about {selectedMuscleGroup.name}</p>
                  <button
                    onClick={handleCloseDetail}
                    className="mt-4 px-4 py-2 bg-amber-500 text-white rounded-lg hover:bg-amber-600 transition-colors"
                  >
                    Back
                  </button>
                </div>
              </div>
              <div className="lg:w-3/5">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Our Picks</h3>
                <div className="flex flex-col gap-4">
                  {/*Cards for Exercises*/}
                  {[1, 2, 3, 4].map((item) => (
                    <div key={item} className="bg-gray-50 border border-gray-200 rounded-lg p-4 flex flex-row h-24">
                      <div className="flex items-center">
                        <div className="bg-gray-200 border-2 border-dashed border-gray-400 rounded-xl w-16 h-16 flex-shrink-0 mr-4" />
                        <div className="flex flex-col justify-between">
                          <h4 className="font-medium text-gray-800">Exercise {item}</h4>
                          <p className="text-sm text-gray-600 max-w-md">Description for {selectedMuscleGroup.name}.</p>
                          <div className="flex justify-start items-center mt-2">
                            <span className="text-xs bg-amber-100 text-amber-800 px-2 py-1 rounded">Barbell</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            {/*Title Box*/}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="text-center">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">Encyclopedia</h1>
                <p className="text-gray-600">Our favorite exercises for every single muscle group.</p>
              </div>
            </div>
            {/*Muscles Box*/}
            <div className="bg-white rounded-2xl shadow-lg p-5">
              <div className="flex justify-center">
                <div className="grid grid-cols-4 gap-x-2 gap-y-3 max-w-2xl">
                {muscleGroups.map((muscleGroup) => (
                  <div
                    key={muscleGroup.id}
                    onClick={() => handleMuscleGroupClick(muscleGroup)}
                    className="bg-gray-50 border border-gray-200 rounded-lg p-4 flex flex-col items-center cursor-pointer hover:shadow-md transition-shadow duration-200 w-40 h-64"
                  >
                    <div className="bg-gray-200 border-2 border-dashed border-gray-400 rounded-xl w-32 h-44 mb-2 flex items-center justify-center">
                      <span className="text-gray-500 text-xs">Img</span>
                    </div>
                    <h3 className="font-semibold text-gray-800 text-center text-sm">{muscleGroup.name}</h3>
                    <p className="text-xs text-gray-600 text-center mt-1">Click to View</p>
                  </div>
                ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default Encyclopedia;