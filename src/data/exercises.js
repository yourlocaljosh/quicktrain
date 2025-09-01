const allExercisesList = [
  {
    id: 'bench_press',
    name: 'Bench Press',
    primaryMuscles: ['chest'],
    secondaryMuscles: ['triceps', 'front_delt'],
    equipment: ['Barbell', 'Bench'],
    description: 'The most iconic gym exercise.',
    favorites: ['chest','upper_chest']
  },
  {
    id: 'pull_up',
    name: 'Pull-Up',
    primaryMuscles: ['lats'],
    secondaryMuscles: ['biceps', 'rear_delt'],
    equipment: ['Pull-Up Bar'],
    description: 'A classic bodyweight exercise for the back and arms.',
    favorites: ['lats']
  },
  {
    id: 'push-up',
    name: 'Push-up',
    primaryMuscles: ['chest'],
    secondaryMuscles: ['triceps','front_delt'],
    equipment: ['None'],
    description: 'You can\'t go wrong with these. Convenient, reliable.',
    favorites: ['chest','upper_chest']
  },
  {
    id: 'incline_bench_press',
    name: 'Incline Bench Press',
    primaryMuscles: ['upper_chest'],
    secondaryMuscles: ['triceps','chest'],
    equipment: ['Barbell', 'Bench'],
    description: 'Bench press variation to target upper chest.',
    favorites: ['upper_chest']
  },
  {
    id: 'tricep_pushdown',
    name: 'Tricep Pushdown',
    primaryMuscles: ['triceps'],
    equipment: ['Cable Machine'],
    description: 'Tricep isolation with a cable machine. Popular with rope or straight-bar attachments.',
    favorites: ['triceps']
  },
  {
    id: 'overhead_cable_tricep_extension',
    name: 'Overhead Cable Tricep Extension',
    primaryMuscles: ['triceps'],
    equipment: ['Cable Machine'],
    description: 'Like tricep pushdown but an overhead movement to target the long head.',
    favorites: ['triceps']
  },
  {
    id: 'dips',
    name: 'Dips',
    primaryMuscles: ['chest'],
    secondaryMuscles: ['upper_chest','triceps'],
    equipment: ['Dip Bar'],
    description: 'Great bodyweight exercise for chest & triceps.',
    favorites: ['upper_chest','chest']
  },
  {
    id: 'cable_lateral_raise',
    name: 'Cable Lateral Raise',
    primaryMuscles: ['mid_delt'],
    secondaryMuscles: ['front_delt'],
    equipment: ['Cable Machine'],
    description: 'Maintain slow, controlled form for great delt isolation.',
    favorites: ['mid_delt','front_delt']
  },
  {
    id: 'deadlift',
    name: 'Deadlift',
    primaryMuscles: ['lower_back'],
    secondaryMuscles: ['hamstrings', 'glutes'],
    equipment: ['Barbell'],
    description: 'Use proper form to avoid injury. Excellent lower back and hamstring work.',
    favorites: ['lower_back','hamstring']
  },
  {
    id: 'romanian_deadlift',
    name: 'Romanian Deadlift',
    primaryMuscles: ['lower_back'],
    secondaryMuscles: ['hamstrings', 'glutes'],
    equipment: ['Barbell'],
    description: 'An alternative version of deadlifts. Still great.',
    favorites: ['lower_back']
  },
  {
    id: 'dumbbell_curl',
    name: 'Dumbbell Curl',
    primaryMuscles: ['biceps'],
    equipment: ['Dumbbell'],
    description: 'Classic reliable bicep exercise. Do one arm at a time to reduce fatigue.',
    favorites: ['biceps']
  },
  {
    id: 'preacher_curl',
    name: 'Preacher Curl',
    primaryMuscles: ['biceps'],
    equipment: ['Dumbbell', 'Bench'],
    description: 'Slow, controlled reps for maximum work. Focus on the long head of the bicep.',
    favorites: ['biceps']
  },
  {
    id: 'incline_dumbbell_curl',
    name: 'Incline Dumbbell Curl',
    primaryMuscles: ['biceps'],
    equipment: ['Dumbbell', 'Bench'],
    description: 'Keep your back flat against the bench to maintain good form. Excellent bicep exercise.',
    favorites: ['biceps']
  },
  {
    id: 'hammer_curl',
    name: 'Hammer Curl',
    primaryMuscles: ['forearms'],
    equipment: ['Dumbbell'],
    description: 'Forearm pumps feel great.',
    favorites: ['forearms']
  },
  {
    id: 'lat_pulldown',
    name: 'Lat Pulldown',
    primaryMuscles: ['lats'],
    secondaryMuscles: ['upper_back', 'traps', 'biceps'],
    equipment: ['Pulldown Machine'],
    description: 'Employ a wider grip to target more lats and less biceps. Traps are barely worked.',
    favorites: ['lats']
  },
  {
    id: 'machine_reverse_fly',
    name: 'Machine Reverse Fly',
    primaryMuscles: ['rear_delt'],
    equipment: ['Pec Deck'],
    description: 'One of two exercises you can do on a pec-deck. Reliable rear delt.',
    favorites: ['rear_delt']
  },
  {
    id: 'machine_chest_fly',
    name: 'Machine Chest Fly',
    primaryMuscles: ['chest'],
    equipment: ['Pec Deck'],
    description: 'Great if you lack a cable machine.',
  },
  {
    id: 'cable_chest_fly',
    name: 'Cable Chest Fly',
    primaryMuscles: ['chest'],
    equipment: ['Cable Machine'],
    description: 'An amazing chest exercise, especially when you slow down. Feel that stretch!',
    favorites: ['chest']
  },
  {
    id: 'skullcrusher',
    name: 'Skullcrushers',
    primaryMuscles: ['triceps'],
    equipment: ['Bench'],
    description: 'Do not actually crush your skull. Movement should be above your head.',
    favorites: ['triceps']
  },
  {
    id: 'dumbbell_wrist_curls',
    name: 'Dumbbell Wrist Curls',
    primaryMuscles: ['forearms'],
    equipment: ['Dumbbell'],
    description: 'Slow, controlled movement for best results.',
    favorites: ['forearms']
  },
  {
    id: 'reverse_curls',
    name: 'Reverse Curls',
    primaryMuscles: ['forearms'],
    equipment: ['Dumbbell', 'Barbell'],
    description: 'Dumbbell or barbell. Keep wrists straight and focus on controlled movement.',
    favorites: ['forearms']
  },
  {
    id: 'cable_crunch',
    name: 'Cable Crunch',
    primaryMuscles: ['abs'],
    equipment: ['Cable Machine'],
    description: 'You look a bit weird doing this but it is worth it.',
    favorites: ['abs']
  },
  {
    id: 'leg_raise',
    name: 'Leg Raise',
    primaryMuscles: ['abs'],
    equipment: ['None'],
    description: 'You can do these anywhere. Great exercise.',
    favorites: ['abs']
  },
  {
    id: 'hanging_leg_raise',
    name: 'Hanging Leg Raise',
    primaryMuscles: ['abs'],
    secondaryMuscles: ['obliques'],
    equipment: ['Pull-Up Bar'],
    description: 'Trains your grip strength and your abs. Try not to swing.',
    favorites: ['abs']
  },
  {
    id: 'side_plank',
    name: 'Side Plank',
    primaryMuscles: ['obliques'],
    secondaryMuscles: ['abs'],
    equipment: ['None'],
    description: 'Straighten out your body and hold. Great for stability too.',
    favorites: ['obliques']
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