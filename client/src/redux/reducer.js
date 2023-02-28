import { GET_ALL_COUNTRIES, GET_COUNTRIES_DETAIL, CLEAN_COUNTRIES_DETAIL, ORDER, ORDER_BYPOPULATION, FILTER_BYCONTINENT, FILTER_BYACTIVITY, ADD_ACTIVITY, GET_COUNTRIES_NAME } from './action-types';

const initialState = {
 countries: [],
 countryDetail : {},
allContinent : [],
 activities:[],
 
 

 

}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case GET_ALL_COUNTRIES:
            return {
                ...state,
                countries: action.payload
            }
        case GET_COUNTRIES_DETAIL:
            return {
                ...state,
                countryDetail: action.payload
            }
       case CLEAN_COUNTRIES_DETAIL:
            return{
                ...state,
                countryDetail: {}
            }
        
        case ORDER:
            const orderCountries = action.payload === 'A-Z' ?
                state.countries.sort(function (a, b) {
                    if (a.name > b.name) {
                        return 1;
                    }
                    if (b.name > a.name) {
                        return -1
                    }
                    return 0;
                }) :
                state.countries.sort(function (a, b) {
                    if (a.name > b.name) {
                        return -1;
                    }
                    if (b.name > a.name) {
                        return 1;
                    }
                    return 0;
                })
            return {
                ...state,
                countries: orderCountries
            }
        
            case ORDER_BYPOPULATION:
                const orderCountriesbyPopulation = action.payload === 'higher-population' ?
                    state.countries.sort(function (a, b) {
                        if (a.population > b.population) {
                            return -1;
                        }
                        if (b.population > a.population) {
                            return 1
                        }
                        return 0;
                    }) :
                    state.countries.sort(function (a, b) {
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
                    countries: orderCountriesbyPopulation
                }
                case FILTER_BYCONTINENT:  
                const allContinent = state.countries;
            const continentFilter = action.payload === 'All' ? allContinent :
                allContinent.filter(i => i.continent === action.payload)
            return {
                ...state,
                allContinent: continentFilter,
            }

            
            case FILTER_BYACTIVITY:  
            const allActivities = state.activities;
            const activityFilter = action.payload === 'Buceo' ? allActivities.filter(e => e.name > action.payload.name) :
                allActivities.filter(c => c.allActivities.find((element) => element.name.toLowerCase() === action.payload))
            return {
                ...state,
                activities: activityFilter
            }

            case ADD_ACTIVITY:
        return {
            ...state,
            activities: [...state.activities, action.payload],  
    }

            case GET_COUNTRIES_NAME:
                const countries = state.countries;
                const countriesFilter = action.payload ? 
                    countries.find(i => i.name === action.payload) : new Error('nop')
                return {
                    ...state,
                    countries: countriesFilter,
                  }
        default:
            return {...state}
    }

}

export default reducer;