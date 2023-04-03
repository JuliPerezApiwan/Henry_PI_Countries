import {GET_ALL_COUNTRIES, GET_COUNTRY_DETAIL, ORDER, FILTER_BYACTIVITIES, ADD_ACTIVITY, GET_COUNTRY_NAME, GET_ALL_ACTIVITIES, CLEAN_DETAIL, CLEAN_FILTER} from './action.types'

const initialState = {
    allCountries: [],
    countries: [],
    orderCountry: [],
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
        default:
            return {
                ...state
            };
    }
}

export default reducer;