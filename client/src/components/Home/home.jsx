import style from '../Home/home.module.css'
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import {
  getAllCountries,
 
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

    return (
         <div className={style.home}> 
         <NavBar/>
          <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} max={max} />
          <div className={style.cards}> {Array.isArray(allCountries) ?

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