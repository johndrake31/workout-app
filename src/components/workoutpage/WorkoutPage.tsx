import { Container, Pagination } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { IWorkout } from '../../interfaces/ISport';
import { workoutSamples } from '../../store/files/workoutSamples';
import Exercise from './components/Exercise';

const WorkoutPage = () => {
  const [workout, setWorkout] = useState<IWorkout>();
  const [breakTimer, setBreakTimer] = useState<number>(0);
  const [page, setPage] = React.useState(2);
  let params = useParams();

  useEffect(() => {
    const getWorkout = workoutSamples.filter(
      (workout) =>
        workout._id.toLowerCase() === params.workoutId?.toLowerCase(),
    );
    if (getWorkout) {
      console.log(getWorkout);
      setWorkout(getWorkout[0]);
      setBreakTimer(getWorkout[0].restBreakSecs);
    }
  }, []);


  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    console.log(workout?.exercises[value - 1]);
    
    setPage(value);
  };

  return (
    <Container maxWidth='xl' sx={{ p: 3 }}>
      <Pagination
        count={workout?.exercises.length}
        page={page}
        onChange={handleChange}
        shape='rounded'
        boundaryCount={0}
      />
      {/* {workout && workout.exercises.map((exr, index)=>(
        
        <Exercise 
        title={exr.title} 
        sets={exr.sets} 
        weight={exr.weight}
        reps={exr.reps}
        timed={exr.timed}
        timer={exr.timer}
        metric={exr.metric}
        notes={exr.notes}
        uri={exr.uri}
        imgUrl={exr.imgUrl}
        />

      ))
      } */}
      <h2 className='text-center'>{workout?.mainTitle}</h2>
      <h3 className='text-center'>{workout?.discriptionShort}</h3>
      <h3 className='text-center'>{workout?.discriptionExtra}</h3>
      <h4>{breakTimer}</h4>
      <button
        type='button'
        className='btn btn-outline-dark bg-transparent btn-lg'
      >
        Start Break
      </button>
    </Container>
  );
};

export default WorkoutPage;
