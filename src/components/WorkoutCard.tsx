

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';



interface IWorkoutCardProps {
  img: string;
  title: string;
  discription: string;
  param?: string;
}
const WorkoutCard = (props: IWorkoutCardProps) => {
  const { img, title, discription } = props;
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia component='img' height='140' image={img} alt='' />
      
      <CardContent sx={{ backgroundColor: 'black' }}>
        <Typography color='white' gutterBottom variant='h5' component='div'>
          {title}<Button
        onClick={() => {
          console.log('bob');
        }}
      >
        <MoreHorizIcon sx={{ color: 'white' }} />
      </Button>
        </Typography>
        <Typography variant='body2' color='white'>
          {discription}
        </Typography>
      </CardContent>
      <CardActions sx={{ backgroundColor: 'black' }}>
        <Button
          size='small'
          sx={{
            color: 'white',
            backgroundColor: 'red',
            '&:hover': {
              color: 'red',
              backgroundColor: 'white',
            },
          }}
        >
          Do Workout
        </Button>
      </CardActions>
    </Card>
  );
};

export default WorkoutCard;
