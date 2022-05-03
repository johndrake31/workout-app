interface IWorkout {
  mainTitle: string;
  weekDuration: number[];
  exercises: IExercise[];
  restBreakSecs: number;
  daysPerWeek?: number[];
}

interface IExercise {
  title: string;
  sets: number[];
  weight: number;
  timed?: boolean;
  timer?: number | null;
  metric?: boolean;
  notes?: string | null;
  reps?: number[];
  uri?: string;
}

export const workouts: IWorkout[] = [
  {
    mainTitle: 'Pre-Phase',
    weekDuration: [3],

    exercises: [
      {
        title: 'Barbell Squats',
        sets: [2],
        reps: [12, 16],
        weight: 20,
        timed: false,
        timer: null,
        notes: null,
        metric: true,
      },
      {
        title: 'Walking Lunges',
        sets: [1],
        reps: [16, 20],
        weight: 20,
        timed: false,
        timer: null,
        notes: null,
        metric: true,
      },
      {
        title: 'Barbell Deadlift',
        sets: [1],
        reps: [8, 12],
        weight: 20,
        timed: false,
        timer: null,
        notes: null,
        metric: true,
      },
      {
        title: 'Barbell Bench Press',
        sets: [2],
        reps: [12, 16],
        weight: 20,
        timed: false,
        timer: null,
        notes: null,
        metric: true,
      },
      {
        title: 'Dumbbell Rows',
        sets: [2],
        reps: [12, 16],
        weight: 20,
        timed: false,
        timer: null,
        notes: null,
        metric: true,
      },
      {
        title: 'Dumbbell Shrugs',
        sets: [2],
        reps: [12, 16],
        weight: 20,
        timed: false,
        timer: null,
        notes: null,
        metric: true,
      },
      {
        title: 'Standing Dumbbell Shoulder Press',
        sets: [2],
        reps: [12, 16],
        weight: 20,
        timed: false,
        timer: null,
        notes: null,
        metric: true,
      },
      {
        title: 'Rear Delt Flyes',
        sets: [1],
        reps: [12, 16],
        weight: 20,
        timed: false,
        timer: null,
        notes: null,
        metric: true,
      },
      {
        title: 'Barbell Curls',
        sets: [2],
        reps: [12, 16],
        weight: 20,
        timed: false,
        timer: null,
        notes: null,
        metric: true,
      },
      {
        title: 'Tricep Pressdown',
        sets: [2],
        reps: [12, 16],
        weight: 20,
        timed: false,
        timer: null,
        notes: null,
        metric: true,
      },
      {
        title: 'Isometric Planks',
        sets: [2],
        reps: [1],
        weight: 20,
        timed: true,
        timer: 60,
        notes: null,
        metric: true,
      },
      {
        title: 'Bodyweight Calf Raises',
        sets: [2],
        reps: [20, 40],
        weight: 20,
        timed: false,
        timer: null,
        notes: null,
        metric: true,
      },
    ],
    restBreakSecs: 90,
  },
  //next workout
  {
    mainTitle: 'Phase 1: Workout A',
    weekDuration: [4, 6],
    exercises: [
      {
        title: 'Box Squats',
        sets: [1],
        reps: [10],
        weight: 20,
        timed: false,
        timer: null,
        notes: null,
        metric: true,
      },
      {
        title: 'Barbell Squats',
        sets: [4, 6],
        reps: [1, 4],
        weight: 20,
        timed: false,
        timer: null,
        notes: null,
        metric: true,
      },
      {
        title: 'Barbell Bench Press',
        sets: [4, 6],
        reps: [1, 4],
        weight: 20,
        timed: false,
        timer: null,
        notes: null,
        metric: true,
      },
      {
        title: 'Weighted Pull-Ups',
        sets: [2],
        reps: [1, 6],
        weight: 20,
        timed: false,
        timer: null,
        notes: null,
        metric: true,
      },
      {
        title: 'Barbell Shrugs',
        sets: [3],
        reps: [3, 6],
        weight: 20,
        timed: false,
        timer: null,
        notes: null,
        metric: true,
      },
      {
        title: 'Barbell Curls',
        sets: [2],
        reps: [6, 8],
        weight: 20,
        timed: false,
        timer: null,
        notes: null,
        metric: true,
      },
      {
        title: 'Barbell Skull Crushers',
        sets: [2],
        reps: [6, 8],
        weight: 20,
        timed: false,
        timer: null,
        notes: null,
        metric: true,
      },
      {
        title: 'Weighted Decline Sit-Ups',
        sets: [5],
        reps: [8, 12],
        weight: 20,
        timed: false,
        timer: null,
        notes: null,
        metric: true,
      },
      {
        title: 'Standing Calf Raises',
        sets: [5],
        reps: [8, 20],
        weight: 20,
        timed: false,
        timer: null,
        notes: null,
        metric: true,
      },
    ],
    restBreakSecs: 180,
  },
  //next workout
  {
    mainTitle: 'Phase 1: Workout B',
    weekDuration: [4, 6],
    exercises: [
      {
        title: 'Barbell Squats',
        sets: [2],
        reps: [12, 16],
        weight: 20,
        timed: false,
        timer: null,
        notes: null,
        metric: true,
      },
    ],
    restBreakSecs: 180,
  },
];
