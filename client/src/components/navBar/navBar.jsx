import React from "react"
import { Link } from "react-router-dom"
import SearchBar from "../search/search"
import style from '../navBar/navBar.module.css'


const NavBar = () => {
    return(
    <div className={style.navBar}>
           <Link to="/form"><button className={style.btn_nvb}>Activities Form</button></Link>
            <SearchBar />
      </div>
        )
    }

    


export default NavBar;