import {GET_ALL_COUNTRIES, GET_COUNTRY_DETAIL, ORDER, FILTER_BYACTIVITIES, ADD_ACTIVITY, GET_COUNTRY_NAME, GET_ALL_ACTIVITIES, CLEAN_DETAIL, CLEAN_FILTER} from './action.types'
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

  export const cleanDetail = () => {
    return {
      type: CLEAN_DETAIL
    }
  }
