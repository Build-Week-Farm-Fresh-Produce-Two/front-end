import {axiosWithAuth} from '../Utils/axiosWithAuth';

//build out actions here I need edit and delete 
export const LOADING_SUPPLYS = "LOADING_SUPPLYS";
export const SUPPLYS_LOADED = "SUPPLYS_LOADED";
export const LOGGED_IN = "LOGGED_IN";
export const ADD_ITEM = "ADD_ITEM";
export const DELETE_ITEM = "DELETE_ITEM";
export const EDIT_ITEM = "EDIT_ITEM";


export const fetchSupplys = () => dispatch => {
    // dispatch({ type: LOADING_SUPPLYS })
    axiosWithAuth()
        .get("api/supply/")
        .then(response => {
            dispatch({ type: SUPPLYS_LOADED, payload: response})
        })
        .catch(error => {
            console.log('error: ', error)
        })
}

export const addSupply = ( supply, history) => dispatch => {
    axiosWithAuth()
        .post('api/supply/:id')
        .then(response => {
            console.log('supply added:', response)
            dispatch({ type: ADD_ITEM, payload: response.data.message })
            history.push('api/supply/:id');
        })
        .catch(error => {
            console.log('error: ', error.response.data.message)
        })
}

export const handleDelete = (history) => dispatch => {
    axiosWithAuth()
    .delete('api/supply/:id')
    .then(response => {
        dispatch({type: DELETE_ITEM, payload: response.message})
        history.push('/Inventory');
    })
    .catch(error => console.log('error: ', error.response.message))
}

export const updateSupply = () => {
    axiosWithAuth()
    .put('api/supply/:id')
    .then()
}