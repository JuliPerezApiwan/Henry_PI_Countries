import React from "react";
import { useDispatch, useSelector, connect } from "react-redux";
import { useState, useEffect } from "react";
import { addActivity, getAllCountries } from "../../redux/actions";
import style from '../form/form.module.css'
import { Link } from "react-router-dom";




const Form = (props) => {
    const countries = useSelector(state => state.countries)

    const [form,setForm] = useState({
        name: "",
        dificult: "",
        duration: "",
        station: "",
        ubication: ""
    })

    const handleChange = (event) => {
        const property=event.target.name;
        const value = event.target.value;

        setForm({
            ...form,
            [property]:value
        })
    }
    

    const handleSubmit= async (event)=>{
        event.preventDefault();
        dispatch(addActivity(form)
        );
        alert("Actividad creada");
    }
    

    const handleSelect = e => { 
        setForm({
            ...form, 
            ubication: form.ubication.concat(e.target.value) } ) } 

   const dispatch = useDispatch()
            useEffect(() => {
                dispatch(getAllCountries())
            }, [])
   

    return(
        
        <form classname={style.form} onSubmit={handleSubmit}>
            <Link to='/countries' className={style.btn_home}><button>Home</button></Link>
            <div className={style.container}>
            <h2>Add Activities Form</h2>
            <label>Name:
            <input type='text' name="name" value={form.name} onChange={handleChange}></input>
        </label>

            <label>Dificult:
            <input type='text' name="dificult" value={form.dificult} onChange={handleChange} placeholder="1 to 5"/>
            </label>
            

            <label>Duration:
            <input type='text' name="duration" placeholder="Duration in hours" value={form.duration} onChange={handleChange}></input>
            </label>
            

            <label >Station:
            <input type='text' name="station" value={form.station} onChange={handleChange} placeholder='Autumn, Winter, Spring, Summer '/> 
            </label>
            
            

            <label>Ubication:
                    <select className="select" name="ubication" onChange={handleSelect} value={form.id}>
                        <option>Countries</option>
                        {
                        countries?.map(e => (
                            <option key={e.name} value={e.name}>{e.name}</option>
                      ))}
                    </ select>
            </label>
            <div className={style.btn}>
            <button type="submit" >Add Activity</button>
            </div>
            </div>
        </form>
        
    )
}



const dispatchAct = (dispatch) => {
    return {
        addActivity:(activity)=>(dispatch(addActivity(activity)))
    }
}

  


//const filterCountries = countries.filter((e) => e.name === [activities].ubication) 
//? filterCountries.activities.push([activities])
// : new Error ('el pais no existe')

    


    export default connect(null,dispatchAct)(Form);