import {axiosWithAuth} from '../Utils/axiosWithAuth';

//build out actions here I need edit and delete 
export const LOADING_SUPPLYS = "LOADING_SUPPLYS";
export const SUPPLYS_LOADED = "SUPPLYS_LOADED";
export const ADD_ITEM = "ADD_ITEM";
export const DELETE_ITEM = "DELETE_ITEM";
export const EDIT_ITEM = "EDIT_ITEM";


export const fetchSupplys = () => dispatch => {
    dispatch({ type: LOADING_SUPPLYS })
    axiosWithAuth()
        .get("api/supply/")
        .then(response => {
            console.log('loading:', response);
            dispatch({ type: SUPPLYS_LOADED, payload: response.data})
        })
        .catch(error => {
            console.log('error: ', error.response.data.message)
        })
}


export const addSupply = ( supplyID, history) => dispatch => {
    axiosWithAuth()
        .post(`api/supply/${supplyID}/`)
        .then(response => {
            console.log('supply added:', response)
            dispatch({ type: ADD_ITEM, payload: response.data.message })
            history.push("/FarmerProfile")
        })
        .catch(error => {
            console.log('error: ', error.response.data.message)
        })
}

export const deleteSupply = supplyId=> dispatch => {
    axiosWithAuth()
    .delete(`api/supply/${supplyId}`)
    .then(response => {
        console.log("supply in deleteSupply: ", response.data.message)
        dispatch({ type: DELETE_ITEM, payload: supplyId})
    })
    .catch(error => {
        console.log('error: ', error.response.data.message)
    })
};

export const editSupply = ( supplyID, history) => dispatch => {
    axiosWithAuth()
        .put(`api/supply/${supplyID}`)
        .then(response => {
            console.log('supply edited:', response)
            dispatch({ type: EDIT_ITEM, payload: response.data.message})
            history.push("/FarmerProfile")

        })
        .catch(error => {
            console.log('error: ', error.response.data.message)
        })
}
