import { exerciseMap } from './exercises';

export const routineTemplates = [
  {
    id: 'FB3',
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
    name: 'Push / Pull / Legs',
    description: 'Focuses every muscle group for maximum gains over 6 days',
    frequency: '6 days/week',
    split: 'PPLPPL',
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
    name: 'Upper / Lower',
    description: 'Isolate upper body muscles, then lower body muscles. Do the UL pair two or three times a week.',
    frequency: '4-6 days/week',
    split: 'UL',
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
  // add more
];
