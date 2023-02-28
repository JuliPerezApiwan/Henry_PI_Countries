import { useParams } from "react-router-dom"; // ME PERMITE TRAER LAS PROPIEDADES, ME RETORNA UN OBJETO
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {getCountriesDetail} from '../../redux/actions';
import {cleanCountryDetail} from '../../redux/actions'

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
            <img src={image} alt={name} />
            <h1>{name}</h1>
            <h3>{continent}</h3>
            <h3>{capital}</h3>
            <h3>{subregion}</h3>
            <h3>{area}</h3>
            <h3>{population}</h3>
        
            <h2>Activity:</h2>
            <h3>Name: {activity?.name}</h3>
            <h3>Dificult: {activity?.dificult}</h3>
            <h3>Duration: {activity?.duration}</h3>
            <h3>Station: {activity?.station}</h3>
        </div>
        )
    } else {   
        return (
        <div>
            <img src={image} alt={name} />
            <h1>{name}</h1>
            <h3>{continent}</h3>
            <h3>{capital}</h3>
            <h3>{subregion}</h3>
            <h3>{area}</h3>
            <h3>{population}</h3>
            </div>
        )
    }
         
}

export default CountryDetail;