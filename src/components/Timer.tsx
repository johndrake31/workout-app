import React from 'react';
import { useState } from 'react';
interface ITimer {
  time: number;
  timerName?: string;
}
const Timer: React.FC<ITimer> = (props) => {
  const { time, timerName } = props;
  const [breakTimer, setBreakTimer] = useState<number>(time);
  const [isClicked, setIsClicked] = useState(false);

  const handleTimerBtn = () => {
    if (isClicked) setIsClicked(false);
    if (!isClicked) setIsClicked(true);
  };

  const handleTimerBtnReset = () => {
    setBreakTimer(time);
    setIsClicked(false);
  };

  React.useEffect(() => {
    if (time) {
      setBreakTimer(time);
    }
  }, [time]);

  React.useEffect(() => {
    if (isClicked) {
      breakTimer > 0 && setTimeout(() => setBreakTimer(breakTimer - 1), 1000);
    }
  }, [breakTimer, isClicked]);
  
  return (
    <>
      <h4 className='text-center'>{timerName}: {breakTimer} secs</h4>
      <div className='d-flex justify-content-evenly mt-4'>
        <button
          onClick={handleTimerBtn}
          type='button'
          className='btn btn-outline-light text-white bg-transparent btn-lg '
          disabled={breakTimer <= 0}
        >
          {!isClicked && 'Start'}
          {isClicked && 'Stop'}
        </button>

        <button
          onClick={handleTimerBtnReset}
          type='button'
          className='btn btn-outline-danger text-white bg-transparent btn-lg'
        >
          {'Reset'}
        </button>
      </div>
    </>
  );
};

export default Timer;
