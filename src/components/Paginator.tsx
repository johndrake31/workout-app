import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
interface IPaginator {
  page: number;
  count: number;
  changePage: (num: number) => void;
}

const Paginator: React.FC<IPaginator> = ({
  page = 0,
  count = 0,
  changePage,
}) => {
  //add buttons for up down
  const handleChangePage = (num: number) => {
    changePage(num);
  };
  return (
    <div className="container px-4 my-4">
      <div className='row gx-4 justify-content-around align-items-center bd-light text-white'>
        <button
          className='col-3 btn btn-dark text-white h4'
          onClick={() => {
            handleChangePage(-1);
          }}
        >
          <ArrowBackIosIcon/>
        </button>
        <span className='col-4 h4 border border-light rounded text-center'>
          {page} - {count}
        </span>

        <button
          className='col-3 btn btn-dark text-white'
          onClick={() => {
            handleChangePage(1);
          }}
        >
          <ArrowForwardIosIcon/>
        </button>
      </div>
    </div>
  );
};

export default Paginator;
