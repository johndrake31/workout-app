import { Container } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { IExercise, IWorkout } from '../../interfaces/ISport';
import { workoutSamples } from '../../store/files/workoutSamples';
import Exercise from './components/Exercise';
import Paginator from '../Paginator';


const WorkoutPage = () => {
  const [workout, setWorkout] = useState<IWorkout>({
    _id: '1',
    mainTitle: 'Pre-Phase',
    weekDuration: [3],
    imgUrl:
      'https://images.unsplash.com/photo-1556817411-31ae72fa3ea0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    discriptionShort: 'Build overall strength and muscle & prepare for Phase I',
    discriptionExtra:
      'Better coordination, increased strength, correction of muscle imbalances and improvement in exercise form.',
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
        title: 'Military Dumbbell Press',
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
  });

  const [breakTimer, setBreakTimer] = useState<number>(0);
  const [page, setPage] = React.useState(1);
  const [isClicked, setIsClicked] = useState(false);
  const [exercise, setExercise] = React.useState<IExercise>({
    title: 'Barbell Squats',
    sets: [2],
    reps: [12, 16],
    weight: 20,
    timed: false,
    timer: null,
    notes: null,
    metric: true,
  });

  let params = useParams();

  useEffect(() => {
    const getWorkout = workoutSamples.filter(
      (workout) =>
        workout._id.toLowerCase() === params.workoutId?.toLowerCase(),
    );
    if (getWorkout) {
      setWorkout(getWorkout[0]);
      setBreakTimer(getWorkout[0].restBreakSecs);
      setExercise(getWorkout[0].exercises[0])
    }
  }, []);

  //pagination
  const handlePageChange = (value: number) => {
    const total = workout?.exercises.length;
    if (page === 1 && value < 0) return;
    if (page === total && value > 0) return;

    setExercise(workout?.exercises[page + value - 1]);
    setPage((prevState) => {
      return prevState + value;
    });
  };

  React.useEffect(() => {
    if (isClicked) {
      breakTimer > 0 && setTimeout(() => setBreakTimer(breakTimer - 1), 1000);
    }
  }, [breakTimer, isClicked]);

  const handleTimerBtn = () => {
    if (isClicked) setIsClicked(false);
    if (!isClicked) setIsClicked(true);
  };

  const handleTimerBtnReset = () => {
    setBreakTimer(workout?.restBreakSecs);
    setIsClicked(false);
  };

  return (
    <Container maxWidth='xl' sx={{ p: 3, color: 'white' }}>
      <Paginator
        page={page}
        count={workout?.exercises.length}
        changePage={handlePageChange}
      />

      <h2 className='text-center'>{workout?.mainTitle}</h2>
      <h5 className='text-center'>{workout?.discriptionShort}</h5>

      <Exercise
        title={exercise.title}
        sets={exercise.sets}
        weight={exercise.weight}
        reps={exercise.reps}
        timed={exercise.timed}
        timer={exercise.timer}
        metric={exercise.metric}
        notes={exercise.notes}
        uri={exercise.uri}
        imgUrl={exercise.imgUrl}
      />

      <h4 className='text-center'>Break-Timer: {breakTimer} secs</h4>
      <div className='d-flex justify-content-evenly mt-4'>
        <button
          onClick={handleTimerBtn}
          type='button'
          className='btn btn-outline-light text-white bg-transparent btn-lg '
          disabled={breakTimer <= 0}
        >
          {!isClicked && 'Start'}
          {isClicked && 'Stop'}
        </button>

        <button
          onClick={handleTimerBtnReset}
          type='button'
          className='btn btn-outline-danger text-white bg-transparent btn-lg'
        >
          {'Reset'}
        </button>
      </div>
    </Container>
  );
};

export default WorkoutPage;
