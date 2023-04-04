import style from '../Home/home.module.css'
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import {
  cleanFilter,
  getAllCountries,
  orderCountries,
  orderbyPopulation,
  filterbyContinent,
 
} from '../../redux/actions'
import CountryCard from '../CountryCard/countryCard';
import Pagination from '../Pagination/pagination';
import NavBar from '../NavBar/navBar';

export const Home = () => {
    const dispatch = useDispatch();
    const allCountries = useSelector((state) => state.allCountries);

    const [order, setOrder] = useState();

    const [currentPage, setCurrentPage] = useState(1)
    const [countriesPerPage, setCountriesPerPage] = useState(10)
    const max = Math.round(allCountries.length / countriesPerPage)


    useEffect(() => {
        dispatch(getAllCountries())
    }, [dispatch])

    const handlerCleanFilter = (event) => {
        event.preventDefault();
        dispatch(cleanFilter(event.target.value));
        setOrder(event.target.value);
      };

    const handlerOrder = (event) => {
        event.preventDefault();
        dispatch(orderCountries(event.target.value));
        setOrder(event.target.value);
      };
    
    const handlerOrderbyPopulation = (event) => {
        event.preventDefault();
        dispatch(orderbyPopulation(event.target.value));
        setOrder(event.target.value);
      };
    
    const handlerFilterbyContinent = (event) => {
        event.preventDefault();
        dispatch(filterbyContinent(event.target.value));
        setOrder(event.target.value);
      };

    return (
         <div className={style.home}> 
         <NavBar/>
          <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} max={max} />


        <button type="submit" onClick={handlerCleanFilter} className={style.btn_clean}>
        Clean filters
        </button>

        <select onChange={handlerOrder} className={style.filters}>
        <option value="All">Order By Name</option>
        <option value="A-Z">A-Z</option>
        <option value="Z-A">Z-A</option>
        </select>

        <select onChange={handlerOrderbyPopulation} className={style.filters}>
        <option value="All">Order By Population</option>
        <option value="higher-weight">Higher Weigh</option>
        <option value="lower-weight">Lower Weigh</option>
        </select>

        <select onChange={handlerFilterbyContinent} className={style.filters}>
        <option value="Filter-by-Continent" key="Filter-by-Continent">Filter By Continent</option>
        <option value="All" key="All">
          All
        </option>
        {allCountries.map((e) =>  (
          <option value={e.continent} key={e.continent}>
            {e.continent}
          </option>
        ))}
      </select>







          <div className={style.cards}> 
          {Array.isArray(allCountries) ?
            allCountries.slice(
            (currentPage - 1) * countriesPerPage,
              (currentPage - 1) * countriesPerPage + countriesPerPage
            ).map((c) => {
                return(
                    <CountryCard 
                    key={c.id}
                    id={c.id}
                    image={c.image}
                    name={c.name}
                    continent={c.continent} />
                )
            }) : null
        }</div>
            
        </div>
    )

}

export default Home