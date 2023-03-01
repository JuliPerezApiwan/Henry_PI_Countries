import React, {useState} from 'react';
import style from '../pagination/pagination.module.css'

function Pagination ({currentPage, setCurrentPage, max}){
  const [input, setInput] = useState (1);

  const nextPage = () => {
    setInput (parseInt(input) + 1);
    setCurrentPage (parseInt(currentPage) + 1);
  };

  const previousPage = () => {
    setInput (parseInt(input) - 1);
    setCurrentPage (parseInt(currentPage) - 1);
  };

  const onKeyDown = e => {
    if (e.keyCode === 10) {
      setCurrentPage (parseInt (e.target.value));
      if (
        parseInt (e.target.value < 1) ||
        parseInt (e.target.value) > Math.ceil (max) ||
        isNaN (parseInt (e.target.value))
      ) {
        setCurrentPage (1);
        setInput (1);
      } else {
        setCurrentPage (parseInt (e.target.value));
      }
    }
  };

  const onChange = e => {
    setInput (e.target.value);
  };

  return (
    <div className={style.pagination}>
      <button disabled={currentPage <= 1} onClick={previousPage}> Prev </button>
        <input onChange={e => onChange (e)} onKeyDown={e => onKeyDown (e)} name="page" value={input} /> <p> of {max} </p>
      <button onClick={nextPage}> Next </button> 
    </div>
  );
};

export default Pagination;