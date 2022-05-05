import { IExercise } from '../../../interfaces/ISport';
const Exercise: React.FC<IExercise> = (props) => {
  const { title, sets, weight, reps, timed=false,
    timer=0,
    metric=true,
    notes='',
    uri='',
    imgUrl='', } = props;
  return (
    <>
      <h2 className='text-white'>{title}</h2>
      <div>
        <p className='text-white'>{sets}</p>
        <p className='text-white'>{reps}</p>
        <p className='text-white'>{weight}</p>
      </div>
    </>
  );
};

export default Exercise;
