import { exerciseMap } from './exercises';

export const routineTemplates = [
  {
    id: 'FB2',
    time: 3,
    name: 'Full Body',
    description: 'Low time in the gym for full gains.',
    frequency: '2 days/week',
    split: 'FB Rest Repeat',
    workouts: [
      {
        day: 1,
        exercises: [
          { exerciseId: 'bench_press', sets: 3, reps: '8-10', rest: '120-240s' },
        ]
      },
      {
        day: 2,
        exercises: [
            //create
        ]
      },
      {
        day: 3,
        exercises: [
            //create
        ]
      }
    ]
  },
  {
    id: 'FB3',
    time: 5,
    name: 'Full Body',
    description: 'Low time in the gym for full gains.',
    frequency: '3 days/week',
    split: 'FB Rest Repeat',
    workouts: [
      {
        day: 1,
        exercises: [
          { exerciseId: 'bench_press', sets: 3, reps: '8-10', rest: '120-240s' },
        ]
      },
      {
        day: 2,
        exercises: [
            //create
        ]
      },
      {
        day: 3,
        exercises: [
            //create
        ]
      }
    ]
  },
  {
    id: 'PPL',
    time: 10,
    name: 'Push / Pull / Legs',
    description: 'Focuses every muscle group for maximum gains over 6 days',
    frequency: '6 days/week',
    split: '2x PPL',
    workouts: [
      {
        day: 'Push',
        exercises: [

        ]
      },
      {
        day: 'Pull',
        exercises: [

        ]
      },
      {
        day: 'Legs',
        exercises: [

        ]
      },
    ]
  },
  {
    id: 'UL',
    time: 6,
    name: 'Upper / Lower',
    description: 'Isolate upper body muscles, then lower body muscles.',
    frequency: '4 days/week',
    split: '2x UL',
    workouts: [
      {
        day: 'Upper',
        exercises: [

        ]
      },
      {
        day: 'Lower',
        exercises: [

        ]
      },
    ]
  },
  {
    id: 'PPLUL',
    time: 14,
    name: 'PPL + Upper Lower',
    description: 'Hybrid five day routine for targetting all muscle groups.',
    frequency: '5 days/week',
    split: 'PPLUL',
    workouts: [
      {
        day: 'Upper',
        exercises: [

        ]
      },
      {
        day: 'Lower',
        exercises: [

        ]
      },
    ]
  },
  {
    id: 'ZZZ',
    time: 0,
    name: 'Rest',
    description: '0 time for fitness? Just rest... 😌',
    frequency: '24/7',
    split: 'ZZZ',
    workouts: [
      {
        day: 'Rest',
        exercises: [

        ]
      },
    ]
  },
  {
    id: 'HOME',
    time: 1,
    name: 'Bedroom Fitness',
    description: 'The two most reliable exercises: pushups and situps.',
    frequency: '1 day/week',
    split: 'W',
    workouts: [
      {
        day: 'Workout',
        exercises: [
          { exerciseId: 'pushups', reps: 'Until Failure', rest: '120s' },
          { exerciseId: 'situps', reps: 'Until Failure', rest: '120s' },
        ]
      },
    ]
  },
  // add more
];
