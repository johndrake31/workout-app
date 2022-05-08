interface IPaginator {
  page: number;
  count: number;
  changePage: (num: number) => void;
}

const Paginator: React.FC<IPaginator> = ({ page=0, count=0, changePage }) => {

    
  //add buttons for up down
  const handleChangePage = (num: number) => {
    
    changePage(num);
  };
  return (
    <div className='d-flex justify-content-around bd-light text-white'>
      <button className='btn btn-light' onClick={()=>{handleChangePage(-1)}}>back</button>
      <span>
        {page} - {count}
      </span>

      <button className='btn btn-light' onClick={()=>{handleChangePage(1)}}>Next</button>
    </div>
  );
};

export default Paginator;
