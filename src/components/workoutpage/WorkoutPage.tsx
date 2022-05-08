import { Container, Pagination } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { IExercise, IWorkout } from '../../interfaces/ISport';
import { workoutSamples } from '../../store/files/workoutSamples';
import Exercise from './components/Exercise';

const WorkoutPage = () => {
  const [workout, setWorkout] = useState<IWorkout>();
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
    }
  }, []);

  //pagination
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    workout && setExercise(workout?.exercises[value - 1]);
    setPage(value);
  };

  const timerHandler = () => {
    if (isClicked) return;
    setIsClicked(true)
    const exBreakInterval = setInterval(() => {
      breakTimer !== 0
        ? setBreakTimer((prevState) => {
            return prevState - 1;
          })
        :  setBreakTimer((prevState) => {
          return prevState + 0 ;
        })
    }, 1000);
    if (breakTimer<=0) {
      setIsClicked(false);
      if (workout) setBreakTimer(workout.restBreakSecs);
      clearInterval(exBreakInterval);
    }
  };
  return (
    
    <Container maxWidth='xl' sx={{ p: 3, color: 'white' }}>

      <Pagination
        count={workout?.exercises.length}
        page={page}
        onChange={handleChange}
        shape='rounded'
        boundaryCount={0}
      />

      <h2 className='text-center'>{workout?.mainTitle}</h2>
      {/* <h3 className='text-center'>{workout?.discriptionShort}</h3>
      <h3 className='text-center'>{workout?.discriptionExtra}</h3> */}

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

      <h4>Break-Timer: {breakTimer} secs</h4>
      <button
        onClick={timerHandler}
        type='button'
        className='btn btn-outline-dark bg-transparent btn-lg'
      >
        Start Break
      </button>
    </Container>
  );
};

export default WorkoutPage;
