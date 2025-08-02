const allExercisesList = [
  {
    id: 'bench_press',
    name: 'Bench Press',
    primaryMuscles: ['chest'],
    secondaryMuscles: ['triceps', 'delts'],
    equipment: ['Barbell', 'Bench'],
    description: 'The most iconic gym exercise.',
    favorites: ['chest']
  },
  {
    id: 'pull_up',
    name: 'Pull-Up',
    primaryMuscles: ['lats'],
    secondaryMuscles: ['biceps', 'delts'],
    equipment: ['Pull-Up Bar'],
    description: 'A classic bodyweight exercise for the back and arms.',
    favorites: ['lats']
  },
];

export const exerciseMap = allExercisesList.reduce((map, exercise) => {
  map[exercise.id] = exercise;
  return map;
}, {});

export const getFavoriteExercisesForMuscle = (muscleGroupId) => {
  return allExercisesList.filter(exercise => 
    exercise.favorites && exercise.favorites.includes(muscleGroupId)
  );
};

export const allExercises = allExercisesList;

export const getAllExercisesForMuscle = (muscleName) => {
  return allExercisesList.filter(exercise => 
    exercise.primaryMuscles.includes(muscleName) || 
    exercise.secondaryMuscles.includes(muscleName)
  );
};