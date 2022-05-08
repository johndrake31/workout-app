import { IExercise } from '../../../interfaces/ISport';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import IndeterminateCheckBoxIcon from '@mui/icons-material/IndeterminateCheckBox';
import AddBoxIcon from '@mui/icons-material/AddBox';
import { useState } from 'react';
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
    imgUrl = '',
  } = props;

  const [exWeight, setExWeight] = useState(weight ? weight : 20);

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
      <h1>Future Image</h1>
      <hr />
      <h3 className='text-center'>Exercise</h3>
      <h3 className='text-center'>{title}</h3>
      <div>
        <div className='row mt-3 justify-content-between'>
          <div className='col-8 h4 p-2'>
            <span
              className='me-4'
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
              className='me-4'
              onClick={() => {
                handleSetWeight(1);
              }}
            >
              <AddBoxIcon fontSize='large' />
            </span>
          </div>
          <div className='col-4 h4 p-2 border border-light rounded text-center'>
            <span className='h3'>{exWeight}</span>
            <span className='me-4 h3'>{metric ? ' kg' : ' lbs'}</span>
          </div>
        </div>
        <div className='container'>
          <div className='row mt-3 justify-content-between '>
            <span className='col-8 h4 p-2 '>Sets: </span>
            <span className='col-4 h4 p-2 border border-light rounded text-center'>
              {sets}
            </span>
          </div>
          <div className='row mt-3 justify-content-between '>
            <span className='col-8 h4 p-2 '>Reps: </span>
            <span className='col-4 h4 p-2 border border-light rounded text-center'>
              {reps ? reps[0] : 0} - {reps ? reps[1] : 0}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Exercise;
