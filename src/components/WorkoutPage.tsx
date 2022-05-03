import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { IWorkout } from '../interfaces/ISport';
import { workoutSamples } from '../store/files/workoutSamples';

const WorkoutPage = () => {
  const [workout, setWorkout] = useState<IWorkout>();
  let params = useParams();
  
  useEffect(() => {

    const getWorkout = workoutSamples.filter(
      (workout) =>
        workout._id.toLowerCase() === params.workoutId?.toLowerCase(),
    );
    if (getWorkout) {
        setWorkout(getWorkout[0]);
    }
  }, []);
 

  return (
    <>
      <h2 className='text-white'>{workout?.mainTitle}</h2>
      <h3 className='text-white'>{workout?.discriptionShort}</h3>
      <h3 className='text-white'>{workout?.discriptionExtra}</h3>

    </>
  );
};

export default WorkoutPage;
