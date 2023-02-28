import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getCountriesName } from '../../redux/actions';



export default function SearchBar() {
    const dispatch = useDispatch();
    const [name, setName] = useState('');

    function handleInputChange(e){
        e.preventDefault();
        setName(e.target.value);
       
    }

    function handleSubmit(e){
        e.preventDefault();
        dispatch(getCountriesName(name));
        setName('');
    }

    return (
      <div >
           <input className="input" value={name} type="text" placeholder="Search here..."
              onChange={handleInputChange}
           />
           <button type="submit" onClick={handleSubmit}>Search</button>
      </div>
    )

}