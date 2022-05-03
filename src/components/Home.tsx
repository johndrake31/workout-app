import Container from '@mui/material/Container';
import Navbar from './Navbar';
import WorkoutCard from './WorkoutCard';
import { workoutSamples } from '../store/files/workoutSamples';
const Home = () => {
  return (
    <>
      <Container maxWidth='xl' sx={{ p: 3 }}>
        {workoutSamples &&
          workoutSamples.map((workout) => (
            <div className='my-3'>
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
