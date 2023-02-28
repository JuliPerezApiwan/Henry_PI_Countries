import { Link } from "react-router-dom";


const CountryCard = ({id, name, image, continent}) => {
    return(
        <div style={{padding:'2rem'}}>
            <img src={image} alt={name} style={{borderRadius:'99999999rem', border:'2px solid black'}}/>

            <Link to={`/detail/${id}`}><h2>{name}</h2></Link>
            
            <h3>{continent}</h3>
        </div>
    )
}

export default CountryCard;