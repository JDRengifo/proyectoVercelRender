import { 
    GET_BY_NAME, 
    GET_COUNTRIES, 
    GET_BY_ID, 
    GET_ALL_ACTIVITIES,
    ORDER_CARDS,
    ORDER_CARDS_POBLACION,
    ORDER_CARDS_CONTINENTS,
    ORDER_CARDS_X_ACTIVITY,
    } from "../actions";


let initialState = {
    allCountries: [],
    allCountriesCopy: [],
    allActivities: [],
    allActivitiesCopy: [],
}

function rootReducer(state = initialState, action){
    
    switch(action.type){ 
         case GET_COUNTRIES:
            return {
                ...state,
                allCountries: action.payload,
                allCountriesCopy: action.payload,
            }
        
         case GET_BY_NAME:
            return {
                ...state,
                allCountries: action.payload,
            }
        
         case GET_BY_ID:
            return {
                ...state,
                allCountries: action.payload,
            }

         case ORDER_CARDS:
            if(action.payload == 'A'){
                return {
                ...state,
                allCountries: [...state.allCountries].sort((a,b)=> a.nombre > b.nombre ? 1 : -1),
                }
           } else {
               return {
                ...state,
                allCountries: [...state.allCountries].sort((a,b)=> a.nombre < b.nombre ? 1 : -1)
                }
            }
         
            case ORDER_CARDS_CONTINENTS:
                if(action.payload == 'All'){
            //   console.log('Reducer.FILTER', state.allCountries)
              return {
                ...state,
                allCountries: state.allCountriesCopy
              }
            } else {
            //   console.log('Reducer Else FILTER ', state.allCountries)
              const filter = state.allCountriesCopy.filter((char)=>char.continente === action.payload);
              return {
                // spread operator
                ...state,
                allCountries: filter,
              }
            }
       
         case ORDER_CARDS_POBLACION:
        
            if(action.payload == 'X'){
                return {
                ...state,
                allCountries: [...state.allCountries].sort((a,b)=> a.poblacion < a.poblacion ? 1 : -1),
                }
            } else {
                // console.log('ORDER else', state.allCountries)
                return {
                ...state,
                allCountries: [...state.allCountries].sort((a,b)=> a.poblacion > b.poblacion ? 1 : -1)
                }
            }
                      
            case GET_ALL_ACTIVITIES:
            return {
                ...state,
                allActivities: action.payload,
            }
                      
            case ORDER_CARDS_X_ACTIVITY:
               
                const filterXAparte = state.allCountriesCopy.filter((char)=> char.Activities?.map((item)=>(item.nombre)).includes(action.payload))
                
                return {
                   ...state,
                   allCountries: filterXAparte,
                 }
                   

                

        default: return state;
    }

};

export default rootReducer;