import { Link } from "react-router-dom";
import style from '../landing/landing.module.css'

const Landing = ()=>{

    return(
        <>
        <div className={style.landing}>
        <Link to="/countries" className={style.link_landing}><button className={style.btn_landing}>HOME PAGE</button></Link>
        </div>
        </>
    )
}

export default Landing;