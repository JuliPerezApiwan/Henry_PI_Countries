import {GET_ALL_COUNTRIES, GET_COUNTRY_DETAIL, ORDER, ORDER_BYPOPULATION,FILTER_BYCONTINENT, FILTER_BYACTIVITIES, ADD_ACTIVITY, GET_COUNTRY_NAME, GET_ALL_ACTIVITIES, CLEAN_DETAIL, CLEAN_FILTER} from './action.types'

const initialState = {
    allCountries: [],
    countries: [],
    order: [],
    allActivities: [],
    countryDetail: [],
    newCountry:[],
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_ALL_COUNTRIES:
            return{
                ...state,
                allCountries: action.payload,
                countries:action.payload
            }
        case GET_COUNTRY_NAME:
            return{
                ...state,
                allCountries:action.payload
            }
        case GET_COUNTRY_DETAIL:
            return {
                ...state,
                countryDetail: action.payload,
            };
        case CLEAN_DETAIL:
            return{
                ...state,
                countryDetail: {}
            }
            case ORDER: 
            const order = 
            action.payload === 'All' || action.payload === 'A-Z' ? state.allCountries.sort(function (a,b) {
                if(a.name > b.name) {
                    return 1;
                  }
                  if (b.name > a.name) {
                    return -1;
                  }
                  return 0;
                })
              : state.allCountries.sort(function (a, b) {
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
                allCountries: order
            }          
            case ORDER_BYPOPULATION:
                const orderbyPopulation =
                action.payload === 'All' ? state.allCountries.sort(function (a,b) {
                    if(a.population > b.population) {
                        return 1;
                      }
                      if (b.population > a.population) {
                        return -1;
                      }
                      return 0;
                    }) :
                action.payload === 'higher-weight' ? 
                state.allCountries.sort(function (a, b) {
                        if (a.population > b.population) {
                          return -1;
                        }
                        if (b.population > a.population) {
                          return 1;
                        }
                        return 0;
                      })
                    :
                    state.allCountries.sort(function (a, b) {
                        if (a.population > b.population) {
                          return 1;
                        }
                        if (b.population > a.population) {
                          return -1;
                        }
                        return 0;
                      })    
                      return {
                        ...state,
                        allCountries: orderbyPopulation
                      };
     
             case FILTER_BYCONTINENT:
                    const allCountries = state.countries
                    const continentFilter =
                    action.payload === 'All' || action.payload === 'Filter-by-Continent'
                    ? allCountries
                    : allCountries.filter((i) => i.continent === action.payload);
                        return {
                          ...state,
                         allCountries: continentFilter,
                    };

            case CLEAN_FILTER:
                        return{
                          ...state,
                          allCountries: state.countries
                        }


            case GET_ALL_ACTIVITIES:
                        return { 
                        ...state,
                        allActivities: action.payload
                        }

            case ADD_ACTIVITY:
                    const newActivity = state.allActivities.slice();
                    newActivity.push(action.payload);
                        return {
                        ...state,
                        allCountries: newActivity,
                        };

        default:
            return {
                ...state
            };
    }
}

export default reducer;