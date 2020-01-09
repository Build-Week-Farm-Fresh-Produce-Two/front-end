//build out actions here I need edit and delete 
export const ADD_ITEM = "ADD_ITEM";
export const DELETE_ITEM = "DELETE_ITEM";
export const EDIT_ITEM = "EDIT_ITEM";



export const addItem = item => {
    return {
        type: ADD_ITEM,
        payload: item
    }
};

export const deleteItem = item => {
    return {
        type: DELETE_ITEM,
        payload:item
    }
};

export const editItem = item => {
    return {
        type: EDIT_ITEM,
        payload: item
    }
}