import { useParams } from 'react-router-dom'; // ME PERMITE TRAER LAS PROPIEDADES, ME RETORNA UN OBJETO
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCountryDetail, cleanDetail } from '../../redux/actions';
import style from '../CountryDetail/countryDetail.module.css';
import Loading from '../Loading/loading';



const CountryDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  //const dog = useSelector((state) => state.dogDetail)
  const { name, image, continent, capital, subregion, area, population } = useSelector((state) => state.countryDetail);
  
  useEffect(() => {
    dispatch(getCountryDetail(id));
     return () => dispatch(cleanDetail()) 
  }, [dispatch, id]);



  if (!name) return (
    <div className={style.loading}>
       
        <div className={style.loaderContainer}>
            <Loading></Loading>
        </div>
     
    </div>
    )
    else 
    return (
           
        <div className={style.dogDetail}>
             <Link to="/home" className={style.btn_detail}>BACK</Link>
        <div className={style.container}>
          <img src={image} alt={name} />
            <h1>{name}</h1>


          <div className={style.dogDetail_data}>
            <h3>Continent:</h3> <p>{continent? continent : 'sin informacion'}</p>
            <h3>Capital:</h3> <p>{capital? capital : 'sin informacion'}</p>
            <h3>Area:</h3> <p>{area? area : 'sin informacion'}</p>
            <h3>Subregion:</h3> <p>{subregion? subregion : 'sin informacion'}</p>
            <h3>Population:</h3> <p>{population? population : 'sin informacion'}</p>
          </div>
        </div>
      </div>
    );
    
  

};

export default CountryDetail;
