import {axiosWithAuth} from '../Utils/axiosWithAuth';

//build out actions here I need edit and delete 
export const LOADING_SUPPLYS = "LOADING_SUPPLYS";
export const SUPPLYS_LOADED = "SUPPLYS_LOADED";
export const LOGGED_IN = "LOGGED_IN";
export const ADD_ITEM = "ADD_ITEM";
export const DELETE_ITEM = "DELETE_ITEM";
export const UPDATE_ITEM = "UPDATE_ITEM";


export const fetchSupplys = () => dispatch => {
    // dispatch({ type: LOADING_SUPPLYS })
    axiosWithAuth()
        .get("api/supply/")
        .then(response => {
            dispatch({ type: SUPPLYS_LOADED, payload: response.data})
        })
        .catch(error => {
            console.log('error: ', error)
        })
}

export const addSupply = (newSupply) => dispatch => {
    console.log('is addSupply working: ')
    axiosWithAuth()
        .post('api/supply/', newSupply)
        .then(response => {
            console.log('supply added:', response)
            
            dispatch({ type: ADD_ITEM, payload: response.data})
            // history.push(`api/supply/${id}`);
        })
        .catch(error => {
            console.log('addSupply error: ', error.response.data.message)
        })
}

export const deleteSupply = ( id, password) => dispatch => {
    console.log('deleteSupply: ', id, password)
    axiosWithAuth()
    .delete(`api/supply/${id}`, {data:{password}})
    .then(response => {
        console.log('deleteSupply: ', response)
        dispatch({type: DELETE_ITEM})
        // history.push('/Inventory');
    })
    .catch(error => console.log('error: ', error.response))
}

export const updateSupply = (newUpdate) => dispatch => {
    console.log('updateSupply: ')
    axiosWithAuth()
    .put(`api/supply/${newUpdate.supplyID}`, newUpdate )
    .then(response => {
        console.log('updateSupply: ', response)
        dispatch({type: UPDATE_ITEM})
    })
    .catch(error => console.log('error: ', error.response))
}