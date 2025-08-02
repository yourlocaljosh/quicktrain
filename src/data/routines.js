import { exerciseMap } from './exercises';

export const routineTemplates = [
  {
    id: 'fullbody3',
    name: 'Full Body',
    description: 'Low time in the gym for full gains.',
    frequency: '3 days/week',
    split: 'Full Body',
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
    id: 'ppl',
    name: 'Push / Pull / Legs',
    description: 'Focuses every muscle group for maximum gains over 6 days',
    frequency: '6 days/week',
    split: 'Push/Pull/Legs',
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
  // add more
];
