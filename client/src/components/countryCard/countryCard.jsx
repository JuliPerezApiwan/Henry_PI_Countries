import { Link } from "react-router-dom";
import style from '../countryCard/countryCard.module.css'


const CountryCard = ({id, name, image, continent}) => {
    return(
        <div className={style.countryCard}>
            <img src={image} alt={name} />

            <Link to={`/detail/${id}`} className={style.link_countryCard} ><h2>{name}</h2></Link>
            
            <h3>{continent}</h3>
        </div>
    )
}

export default CountryCard;