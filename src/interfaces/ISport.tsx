export interface IWorkout {
  _id: string;
  mainTitle: string;
  discriptionShort?: string;
  discriptionExtra?: string;
  weekDuration: number[];
  exercises: IExercise[];
  restBreakSecs: number;
  daysPerWeek?: number[];
  imgUrl?: string;
}

export interface IExercise {
  uuid?:string;
  title: string;
  sets: number[];
  weight: number;
  timed?: boolean;
  timer?: number | null;
  metric?: boolean;
  notes?: string | null;
  reps?: number[];
  uri?: string;
  imgUrl?: string | null;
}
