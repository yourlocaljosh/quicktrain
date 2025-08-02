const chestExercises = [
  {
    id: 'bench_press',
    name: 'Bench Press',
    primaryMuscles: ['chest'],
    secondaryMuscles: ['triceps', 'delts'],
    equipment: ['Barbell', 'Bench'],
    description: 'The most iconic gym exercise.',
  },
];

const backExercises = [
  {
    id: 'pull_up',
    name: 'Pull-Up',
    primaryMuscles: ['lats'],
    secondaryMuscles: ['biceps', 'delts'],
    equipment: ['Pull-Up Bar'],
    description: 'A classic bodyweight exercise for the back and arms.',
  },
];


export const exercisesByMuscleGroup = {
  chest: chestExercises,
  back: backExercises,
};

export const allExercises = [
  ...chestExercises,
  ...backExercises,
];

export const exerciseMap = allExercises.reduce((map, exercise) => {
  map[exercise.id] = exercise;
  return map;
}, {});