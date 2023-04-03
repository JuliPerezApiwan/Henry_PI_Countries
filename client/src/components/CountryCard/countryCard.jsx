import { Link } from "react-router-dom"
import style from '../CountryCard/countryCard.module.css'

const CountryCard = ({id, name, image, continent}) => {

    return(
        <div className={style.countryCard}>
        <img src={image} alt={name} />

        <Link to={`/countries/${id}`} className={style.link_countryCard}>
        <h2>{name}</h2>
        </Link>
        <h4>{continent}</h4>

        </div>
    )
}

export default CountryCard