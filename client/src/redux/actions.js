import {GET_ALL_COUNTRIES, GET_COUNTRY_DETAIL, ORDER, ORDER_BYPOPULATION, FILTER_BYCONTINENT, FILTER_BYACTIVITIES, ADD_ACTIVITY, GET_COUNTRY_NAME, GET_ALL_ACTIVITIES, CLEAN_DETAIL, CLEAN_FILTER, } from './action.types'
import axios from 'axios'

export const getAllCountries = () => {
    return async (dispatch) => {
        const response = await axios.get('http://localhost:3001/countries')
        const data = response.data

        return dispatch ({
            type: GET_ALL_COUNTRIES,
            payload: data
        })
    }
}

export const getCountryName = (name) => {
    return async (dispatch) => {
      try {
        const response = await axios.get(`http://localhost:3001/countries/name?name=${name}`);
      const data = response.data;
      
      return await dispatch({
        type: GET_COUNTRY_NAME,
        payload: data,
      });
      } catch (error) {
        alert("El pais ingresado no existe en la base de datos")
        return getAllCountries()
      }
    };
  };

export const getCountryDetail = (id) => {
    return async (dispatch) => {
      const response = await axios.get(`http://localhost:3001/countries/${id}`);
      const data = response.data;
  
      return dispatch({
        type: GET_COUNTRY_DETAIL,
        payload: data,
      });
    };
  };

  export const getAllActivities = () => {
    return async (dispatch) => {      
        const response = await axios.get('http://localhost:3001/activities')
        const data = response.data
        
        return dispatch({
            type: GET_ALL_ACTIVITIES,
            payload: data
        })
    }
}

export const addActivity = (payload) => {
    return  async (dispatch) => {
    const response =  axios.post('http://localhost:3001/activities', payload);
    const data = response.data
    
    
    return await dispatch({
      type: ADD_ACTIVITY,
      payload: data
    });
  };
};

  export const cleanDetail = () => {
    return {
      type: CLEAN_DETAIL
    }
  }

  export const cleanFilter = () => {
    return {
      type: CLEAN_FILTER
    }
  }

  export const orderCountries = (name) => {
    return {type: ORDER, payload: name}
}

export const orderbyPopulation = (population) => {
    return { type: ORDER_BYPOPULATION, payload: population };
};

export const filterbyContinent = (continent) => {
    return { type: FILTER_BYCONTINENT, payload: continent };
};
