import React, { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getAllCountries, getCountryName } from '../../redux/actions';
import style from '../Search/search.module.css';
import { Link } from 'react-router-dom';

const SearchBar = () => {
    const dispatch = useDispatch();
    const [name, setName] = useState('');
  
    function handleInputChange(e) {
      e.preventDefault();
      setName(e.target.value);
    }
  
    function handleSubmit(e) {
      e.preventDefault();
      if(name !== ""){
     dispatch(getCountryName(name));;
      setName("");}
      else{
      alert("Ingresa un nombre para buscar")
      }
    }
  
    useEffect(() => {
      dispatch(getAllCountries());
      
    }, [dispatch]);

    return (
        <div className={style.search}>
        
          <input
            className="input"
            value={name}
            type="text"
            placeholder="Search here..."
            onChange={handleInputChange}
          />
    
          <button type="submit" onClick={handleSubmit}>
            Search
          </button>
        </div>
      );
}

export default SearchBar
