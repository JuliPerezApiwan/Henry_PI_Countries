import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import {
  getAllCountries,
  orderCountriesbyPopulation,
  filterbyContinent,
  orderCountries,
  filterbyActivity,
  getAllActivities,
} from '../../redux/actions';
import CountryCard from '../countryCard/countryCard';
import Pagination from '../pagination/pagination';
import style from '../country/country.module.css';

export const Country = () => {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries);
  const activity = useSelector((state) => state.activities);
  const [order, setOrder] = useState();

  const [currentPage, setCurrentPage] = useState(1);
  const [countriesPerPage, setCountriesPerPage] = useState(10);
  const max = Math.round(countries.length / countriesPerPage);

  const handlerOrder = (event) => {
    event.preventDefault();
    dispatch(orderCountries(event.target.value));
    setOrder(event.target.value);
  };

  const handlerOrderbyPopulation = (event) => {
    event.preventDefault();
    dispatch(orderCountriesbyPopulation(event.target.value));
    setOrder(event.target.value);
  };

  const handlerFilterbyContinent = (event) => {
    event.preventDefault();
    dispatch(filterbyContinent(event.target.value));
    setOrder(event.target.value);
  };

  const handlerFilterbyActivity = (event) => {
    event.preventDefault();
    dispatch(filterbyActivity(event.target.value));
    setOrder(event.target.value);
  };

  useEffect(() => {
    dispatch(getAllCountries());
    dispatch(getAllActivities());
  }, [dispatch]);

  return (
    <div className={style.country}>
      <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} max={max} />

      <select onChange={handlerOrder} className={style.filters}>
        <option value="All">Order By Name</option>
        <option value="A-Z">A-Z</option>
        <option value="Z-A">Z-A</option>
      </select>

      <select onChange={handlerOrderbyPopulation} className={style.filters}>
        <option value="All">Order By Population</option>
        <option value="higher-population">Higher population</option>
        <option value="lower-population">Lower population</option>
      </select>

      <select onChange={handlerFilterbyContinent} className={style.filters}>
        <option value="All">Filter By Continent</option>
        <option value="All" key="All">
          All
        </option>
        <option value="Africa" key="Africa">
          Africa
        </option>
        <option value="Antarctica" key="Antarctica">
          Antarctica
        </option>
        <option value="Asia" key="Asia">
          Asia
        </option>
        <option value="Europe" key="Europe">
          Europe
        </option>
        <option value="North America" key="NorthAmerica">
          North America
        </option>
        <option value="Oceania" key="Oceania">
          Oceania
        </option>
        <option value="South America" key="SouthAmerica">
          South America
        </option>
      </select>
      <select onChange={handlerFilterbyActivity} className={style.filters}>
        <option value="All">Filter By Activity</option>
        <option value="All" key="All">
          All
        </option>
        {activity.map((e) => (
          <option value={e.name} key={e.name}>
            {e.name}
          </option>
        ))}
      </select>
      <div className={style.cards}>
        {countries
          .slice(
            (currentPage - 1) * countriesPerPage,
            (currentPage - 1) * countriesPerPage + countriesPerPage
          )
          .map((c) => {
            return (
              <CountryCard
                key={c.id}
                id={c.id}
                image={c.image}
                name={c.name}
                continent={c.continent}
              />
            );
          })}
      </div>
    </div>
  );
};

export default Country;
