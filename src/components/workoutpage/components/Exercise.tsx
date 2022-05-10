import { IExercise } from '../../../interfaces/ISport';
import IndeterminateCheckBoxIcon from '@mui/icons-material/IndeterminateCheckBox';
import AddBoxIcon from '@mui/icons-material/AddBox';
import { useEffect, useState } from 'react';
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} from '@mui/material';
const Exercise: React.FC<IExercise> = (props) => {
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

  const [exWeight, setExWeight] = useState(weight ? weight : 20);
  const [image, setImage] = useState('');

  useEffect(() => {
    if (imgUrl) setImage(imgUrl);
  }, [imgUrl]);

  const handleSetWeight = (num: number) =>
    setExWeight((prevState) => {
      if (prevState === 0 && num <= 0) {
        return 0;
      } else {
        return (prevState += num);
      }
    });
  return (
    <div className='text-white bg-dark'>
      <Card sx={{ maxWidth: '100%' }}>
        <CardMedia component='img' sx={{maxHeight: '25%'}} image={image} alt='' />
        <CardContent>
          <Typography gutterBottom variant='h4' component='div'>
            Exercise:
          </Typography>
          <Typography variant='h5' color='text.secondary'>
            {title}
          </Typography>
        </CardContent>
      </Card>

      <div className='container'>
        <div className='row mt-3 justify-content-between'>
          <div className='col-8 h4 p-2'>
            <span
              className='me-5'
              onTouchStart={() => {
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
              onTouchStart={() => {
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
            {sets}
          </span>
        </div>
        <div className='row mt-3 justify-content-between '>
          <span className='col-8 h4 p-2 '>Reps: </span>
          <span className='col-4 h4 p-2 border border-light rounded text-center text-white'>
            {reps ? reps[0] : 0} {reps![1] ? '- ' + reps![1] : ''}
          </span>
        </div>

        {/* //Current Card */}
        {/* <div className='text-white bg-dark'>
        {/* {imgUrl && <img src={image} className='img-fluid' alt={title} />}
        <hr />
        <h3 className='text-center'>Exercise</h3>
        <h3 className='text-center'>{title}</h3> */}

        {/* <div className='container'>
          
        </div>
      </div>  */}
      </div>
    </div>
  );
};

export default Exercise;
