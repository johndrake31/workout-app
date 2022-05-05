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
      <h2 className=''>{title}</h2>
      <div>
        <p className=''>{sets}</p>
        <p className=''>{reps}</p>
        <p className=''>{weight}</p>
      </div>
    </>
  );
};

export default Exercise;
