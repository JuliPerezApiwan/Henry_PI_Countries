import {
  GET_ALL_COUNTRIES,
  GET_COUNTRIES_DETAIL,
  ORDER,
  ORDER_BYPOPULATION,
  FILTER_BYCONTINENT,
  FILTER_BYACTIVITY,
  ADD_ACTIVITY,
  GET_COUNTRIES_NAME,
  GET_ALL_ACTIVITIES,
} from './action-types';

import axios from 'axios';

export const getAllCountries = () => {
  return async (dispatch) => {
    const response = await axios.get('http://localhost:3001/countries');
    const data = response.data;

    return dispatch({
      type: GET_ALL_COUNTRIES,
      payload: data,
    });
  };
};

export const getCountriesDetail = (id) => {
  return async (dispatch) => {
    const response = await axios.get(`http://localhost:3001/countries/${id}`);
    const data = response.data;

    return dispatch({
      type: GET_COUNTRIES_DETAIL,
      payload: data,
    });
  };
};

export const getAllActivities = () => {
  return async (dispatch) => {
    const response = await axios.get('http://localhost:3001/activities');
    const data = response.data;

    return dispatch({
      type: GET_ALL_ACTIVITIES,
      payload: data,
    });
  };
};

export const orderCountries = (name) => {
  return { type: ORDER, payload: name };
};

export const orderCountriesbyPopulation = (population) => {
  return { type: ORDER_BYPOPULATION, payload: population };
};

export const filterbyContinent = (continent) => {
  return { type: FILTER_BYCONTINENT, payload: continent };
};

export const filterbyActivity = (activity) => {
  return { type: FILTER_BYACTIVITY, payload: activity };
};

export const addActivity = (activity) => {
  return async (dispatch) => {
    const response = await axios.post('http://localhost:3001/activities', activity);
    const data = response.data;

    return dispatch({
      type: ADD_ACTIVITY,
      payload: activity,
    });
  };
};

export const getCountriesName = (name) => {
  return async (dispatch) => {
    const response = await axios.get(`http://localhost:3001/countries/name?name=${name}`);
    const data = response.data;

    return await dispatch({
      type: GET_COUNTRIES_NAME,
      payload: data,
    });
  };
};

//http://localhost:3001/countries/name?name=
