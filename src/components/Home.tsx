import Container from '@mui/material/Container';
import WorkoutCard from './WorkoutCard';
import { workoutSamples } from '../store/files/workoutSamples';
import { Grid } from '@mui/material';
import logo from '../../src/store/branding/miiGymCoachLogosPink.jpeg';
import useMediaQuery from '@mui/material/useMediaQuery';
const Home = () => {
  const matches = useMediaQuery('(max-width:900px)');
  return (
    <>
      <Container maxWidth='xl' sx={{ p: 3 }}>
        <img style={{
          maxWidth: '25%', 
          marginLeft: 'auto',
          marginRight: 'auto',
          display: 'block',
          borderRadius: '50%',
          marginTop: '1rem',
          marginBottom: '1rem',
          }} src={logo} alt="" />
        <h1 className='text-white text-center mb-5'>Welcome to Mii Gym Coach</h1>
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
