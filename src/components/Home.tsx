import Container from '@mui/material/Container';
import WorkoutCard from './WorkoutCard';
import { workoutSamples } from '../store/files/workoutSamples';
const Home = () => {
  return (
    <>
      <Container maxWidth='xl' sx={{ p: 3 }}>
        <h2 className='text-white text-center'>Workouts</h2>
        {workoutSamples &&
          workoutSamples.map((workout, index) => (
            <div className='my-3' key={index*3.14 +'_workoutcard'}>
              <WorkoutCard
                img={`${workout.imgUrl}`}
                title={workout.mainTitle}
                discription={
                  workout.discriptionShort ? workout.discriptionShort : ''
                }
                param={workout._id}
              />
            </div>
          ))}
      </Container>
    </>
  );
};

export default Home;
