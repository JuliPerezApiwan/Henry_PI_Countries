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

const initialState = {
  countries: [],
  countryDetail: [],
  allContinents: [],
  activity: [],
  activities: [],
  search: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_COUNTRIES:
      return {
        ...state,
        countries: action.payload,
        countryDetail: action.payload,
        allContinents: action.payload,
        activities: action.payload,
        search: action.payload,
      };

    case GET_COUNTRIES_DETAIL:
      return {
        ...state,
        countryDetail: action.payload,
      };

    case ORDER:
      const orderCountries =
        action.payload === 'A-Z'
          ? state.countries.sort(function (a, b) {
              if (a.name > b.name) {
                return 1;
              }
              if (b.name > a.name) {
                return -1;
              }
              return 0;
            })
          : state.countries.sort(function (a, b) {
              if (a.name > b.name) {
                return -1;
              }
              if (b.name > a.name) {
                return 1;
              }
              return 0;
            });
      return {
        ...state,
        countries: orderCountries,
      };

    case ORDER_BYPOPULATION:
      const orderCountriesbyPopulation =
        action.payload === 'higher-population'
          ? state.countries.sort(function (a, b) {
              if (a.population > b.population) {
                return -1;
              }
              if (b.population > a.population) {
                return 1;
              }
              return 0;
            })
          : state.countries.sort(function (a, b) {
              if (a.population > b.population) {
                return 1;
              }
              if (b.population > a.population) {
                return -1;
              }
              return 0;
            });
      return {
        ...state,
        countries: orderCountriesbyPopulation,
      };

    case FILTER_BYCONTINENT:
      const allContinents = state.allContinents;
      const continentFilter =
        action.payload === 'All'
          ? allContinents
          : allContinents.filter((i) => i.continent === action.payload);
      return {
        ...state,
        countries: continentFilter,
      };

    case FILTER_BYACTIVITY:
      const activity = state.activities;
      const allCountries = state.activity;
      const filterActivity =
        action.payload === 'All'
          ? allCountries
          : allCountries.filter((e) => e.activity.name === action.payload);
      return {
        ...state,
        countries: filterActivity,
      };

    case GET_ALL_ACTIVITIES:
      return {
        ...state,
        activities: action.payload,
      };

    case ADD_ACTIVITY:
      const newActivities = state.activities.slice();
      newActivities.push(action.payload);
      return {
        ...state,
        activities: newActivities, //[...state.activities, action.payload]
      };

    case GET_COUNTRIES_NAME:
      return {
        ...state,
        countries: [action.payload],
      };

    default:
      return { ...state };
  }
};

export default reducer;
