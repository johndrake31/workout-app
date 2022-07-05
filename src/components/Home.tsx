import Container from '@mui/material/Container';
import WorkoutCard from './WorkoutCard';
import { workoutSamples } from '../store/files/workoutSamples';
import { Grid } from '@mui/material';
const Home = () => {
  return (
    <>
      <Container maxWidth='xl' sx={{ p: 3 }}>
        <h2 className='text-white text-center'>Workouts</h2>

        <Grid
          container
          direction='column'
          justifyContent='center'
          alignItems='center'
        >
          {workoutSamples &&
            workoutSamples.map((workout, index) => (
              <div className='my-3' key={index * 3.14 + '_workoutcard'}>
                <Grid item xs={12}>
                  <WorkoutCard
                    img={`${workout.imgUrl}`}
                    title={workout.mainTitle}
                    discription={
                      workout.discriptionShort ? workout.discriptionShort : ''
                    }
                    param={workout._id}
                  />
                </Grid>
              </div>
            ))}
        </Grid>
      </Container>
    </>
  );
};

export default Home;
