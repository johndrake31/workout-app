import { IExercise } from '../../../interfaces/ISport';
import IndeterminateCheckBoxIcon from '@mui/icons-material/IndeterminateCheckBox';
import AddBoxIcon from '@mui/icons-material/AddBox';
import { useEffect, useState } from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  
} from '@mui/material';
const Exercise: React.FC<IExercise> = (props) => {
  const matches = useMediaQuery('(max-width:900px)');
  const {
    title,
    sets,
    weight,
    reps,
    timed = false,
    timer = 0,
    metric = true,
    notes = '',
    uri = '',
    imgUrl,
  } = props;

  const [exWeight, setExWeight] = useState<number>();
  const [image, setImage] = useState('');

  useEffect(() => {
    if (weight) setExWeight(weight);
    if (imgUrl) setImage(imgUrl);
  }, [imgUrl, weight]);

  const handleSetWeight = (num: number) => {
    setExWeight(exWeight! + num);
  };
  return (
    <div className='text-white bg-dark'>
      <Card sx={{ maxWidth: matches ? '100%' : '50%', margin: 'auto'}}>
        <CardMedia
          component='img'
          sx={{ maxHeight: '25%', margin: 'auto' }}
          image={image}
          alt=''
        />
        <CardContent>
          <Typography gutterBottom variant='h4' component='div'>
            Exercise:
          </Typography>
          <Typography variant='h5' color='text.secondary'>
            {title}
          </Typography>

          {notes && (
            <Typography variant='body1' color='text.secondary'>
              NOTES: {notes}
            </Typography>
          )}
        </CardContent>
      </Card>

      <div className='container'>
        <div className='row mt-4 justify-content-between'>
          <div className='col-8 h4 p-2'>
            <span
              className='me-5'
              onClick={() => {
                handleSetWeight(-1);
              }}
            >
              <IndeterminateCheckBoxIcon
                fontSize='large'
                sx={{ color: 'red' }}
              />
            </span>
            <span
              className=''
              onClick={() => {
                handleSetWeight(1);
              }}
            >
              <AddBoxIcon fontSize='large' />
            </span>
          </div>
          <div className='col-4 h4 p-2 border border-light rounded text-center'>
            <span className=''>{exWeight}</span>
            <span className=''>{metric ? ' kg' : ' lbs'}</span>
          </div>
        </div>

        <div className='row mt-3 justify-content-between '>
          <span className='col-8 h4 p-2 '>Sets: </span>
          <span className='col-4 h4 p-2 border border-light rounded text-center'>
            {sets ? sets[0] : 0} {sets![1] ? '- ' + sets![1] : ''}
          </span>
        </div>
        <div className='row mt-3 justify-content-between '>
          <span className='col-8 h4 p-2 '>Reps: </span>
          <span className='col-4 h4 p-2 border border-light rounded text-center text-white'>
            {reps ? reps[0] : 0} {reps![1] ? '- ' + reps![1] : ''}
          </span>
        </div>

      </div>
    </div>
  );
};

export default Exercise;
