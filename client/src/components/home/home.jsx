import Country from "../country/country";
import style from "../home/home.module.css"


const Home = ()=>{
    return(
        <div className={style.home}>
          <Country></Country>
          
          
       </div>
    )
}

export default Home;