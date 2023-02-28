import { GET_ALL_COUNTRIES, GET_COUNTRIES_DETAIL, /*CLEAN_COUNTRIES_DETAIL*/ ORDER, ORDER_BYPOPULATION, FILTER_BYCONTINENT, FILTER_BYACTIVITY, ADD_ACTIVITY, GET_COUNTRIES_NAME } from './action-types';





export const getAllCountries = () => {
    return function(dispatch){
        fetch('http://localhost:3001/countries')
        .then(response => response.json())
        .then(data => { 
            console.log(data)
            return dispatch({
                type: GET_ALL_COUNTRIES,
                payload: data
            })
        })
        .catch(console.error)
    }
    
}

    /* return async (dispatch) => {
        const response = await axios('https://restcountries.com/v3/all')
        const data = response.data  
        
        return dispatch({
            type: GET_ALL_COUNTRIES,
            payload: data
        })
    } */
    //fetch('https://restcountries.com/v3/all')
  //.then(response => response.json())
  //.then(data => console.log(data));
  
  export const getCountriesDetail = (id) => {
    return function(dispatch){
        fetch(`http://localhost:3001/countries/${id}`)
        .then(response => response.json())
        .then(data => {
            return dispatch({
                type: GET_COUNTRIES_DETAIL,
                payload: data
            })
        })
        .catch(console.error)
    }
  }

 /*export const cleanCountryDetail = () => {
    return {type: CLEAN_COUNTRIES_DETAIL }
  }*/

  export const orderCountries = (name) => {
    return { type: ORDER, payload: name }
  }

  export const orderCountriesbyPopulation = (population) => {
    return { type: ORDER_BYPOPULATION, payload: population }
  }

  export const filterbyContinent = (continent) => {
    return { type: FILTER_BYCONTINENT, payload: continent }
  }

  export const filterbyActivity = (activity) => {
    return { type: FILTER_BYACTIVITY, payload: activity }
  }

  export const addActivity = (activity) => {
    return { type: ADD_ACTIVITY, payload: activity}
  }

  export const getCountriesName = (name) => {
    return { type: GET_COUNTRIES_NAME, payload: name}
  }