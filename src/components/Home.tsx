import Container from '@mui/material/Container';
import Navbar from './Navbar';
import WorkoutCard from './WorkoutCard';
const Home = () => {
  return (
    <>
      <Container maxWidth='xl' sx={{p:3}}>
        <WorkoutCard
          img={
            'https://images.unsplash.com/photo-1556817411-31ae72fa3ea0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'
          }
          title={'First Workout'}
          discription={ "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur, sed!" }
        />
        <WorkoutCard
          img={
            'https://images.unsplash.com/photo-1556817411-31ae72fa3ea0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'
          }
          title={'Second Workout'}
          discription={ "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur, sed!" }
        />
        <WorkoutCard
          img={
            'https://images.unsplash.com/photo-1556817411-31ae72fa3ea0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'
          }
          title={'Third Workout'}
          discription={ "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur, sed!" }
        />
      </Container>

    </>
  );
};

export default Home;
