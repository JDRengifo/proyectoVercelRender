import axios from "axios";

export const GET_COUNTRIES = "GET_COUNTRIES";
export const GET_BY_NAME = "GET_BY_NAME";
export const GET_BY_ID = "GET_BY_ID";
export const GET_ALL_ACTIVITIES = "GET_ALL_ACTIVITIES";
export const POST_CREATE_ACTIVITIES = "POST_CREATE_ACTIVITIES";
export const ORDER_CARDS = "ORDER_CARDS";
export const ORDER_CARDS_POBLACION = "ORDER_CARDS_POBLACION";
export const ORDER_CARDS_CONTINENTS = "ORDER_CARDS_CONTINENTS";
export const ORDER_CARDS_X_ACTIVITY = "ORDER_CARDS_X_ACTIVITY";


export function getCountries(){
    return async function (dispatch){
        const response = await axios("http://localhost:3001/countries");
        return dispatch({
            type: "GET_COUNTRIES",
            payload: response.data
        })
    }
}

export function getByName(nombre){
    // console.log("Actions", nombre)
    return async function (dispatch){
        const response = await axios(`http://localhost:3001/countries/?name=${nombre}`);
        // console.log(response.data)
        return dispatch({
            type: "GET_BY_NAME",
            payload: response.data
        })
    }
}

export function getById(id){
    // console.log("Actions", id)
    return async function (dispatch){
        const response = await axios(`http://localhost:3001/countries/${id}`);
        // console.log("Actions", response.data)
        return dispatch({
            type: "GET_BY_ID",
            payload: [response.data]
        })
    }
}

export function getAllActivities(){
    // console.log("Actions", id)
    return async function (dispatch){
        const response = await axios(`http://localhost:3001/activities`);
        // console.log("Actions", response.data)
        return dispatch({
            type: "GET_ALL_ACTIVITIES",
            payload: response.data
        })
    }
}

export const orderCards = (payload) => {
    // console.log(payload)
    return {
        type: ORDER_CARDS,
        payload,
    };
};
export const orderCardsXnum = (payload) => {
    // console.log('Action',payload)
    return {
        type: ORDER_CARDS_POBLACION,
        payload,
    };
};

export const orderCardsXContinents = (payload)=>{ 
    // console.log("Actions", payload)
    return {
        type: ORDER_CARDS_CONTINENTS,
        payload: payload
    }
};


export function postActivities(actividades){
    console.log("Actions", actividades)
    return async function (dispatch){
        const response = await axios.post("http://localhost:3001/activities",actividades);
        // console.log("Actions5", response.data)
        window.alert('Actividad Creada Con Exito')
       
    }
}

export function orderXActivity(payload){
    // console.log("Actions", payload)
    return {
        type: ORDER_CARDS_X_ACTIVITY,
        payload: payload
    }
};
