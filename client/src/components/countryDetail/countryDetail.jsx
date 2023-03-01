import { useParams } from "react-router-dom"; // ME PERMITE TRAER LAS PROPIEDADES, ME RETORNA UN OBJETO
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {getCountriesDetail} from '../../redux/actions';
import {cleanCountryDetail} from '../../redux/actions'
import style from '../countryDetail/countryDetail.module.css'


const CountryDetail = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const { name, image, continent, capital, subregion, area, population, activity} = useSelector(state => state.countryDetail)

    useEffect(() => {
        dispatch(getCountriesDetail(id));

        //return () => dispatch(cleanCountryDetail()) // que cuando se demonte me limpie countryDetail
        
    }, [])

    if(activity !== null) {
        return (
            
        <div>
            
            <div className={style.countryDetail} >
            <img src={image} alt={name} />
            <h1>{name}</h1>
            <div className={style.countryDetail_data}>
            <h3>Continent : {continent}</h3>
            <h3>Capital : {capital}</h3>
            <h3>Subregion : {subregion}</h3>
            <h3>Area : {area}</h3>
            <h3>Population : {population}</h3>
            </div>

            <div className={style.countryDetail_activity}> 
            <h2>Activity:</h2>
            <h3>Name: {activity?.name}</h3>
            <h3>Dificult: {activity?.dificult}</h3>
            <h3>Duration: {activity?.duration}</h3>
            <h3>Station: {activity?.station}</h3> 
            </div>
           </div>
        </div>
        )
    } else {   
        return (
        <div className={style.countryDetail} > 
            <img src={image} alt={name} />
            <h1>{name}</h1>
            <div className={style.countryDetail_data}>
            <h3>Continent: {continent}</h3>
            <h3>Capital: {capital}</h3>
            <h3>Subregion: {subregion}</h3>
            <h3>Area: {area}</h3>
            <h3>Population: {population}</h3>
            </div>
            <div className={style.countryDetail_activity}> 
            <h2>Activity:</h2>
            <h3>Has no activities</h3>
            </div>
            </div>
        )
    }
         
}

export default CountryDetail;