import { ADD_ITEM, DELETE_ITEM, EDIT_ITEM } from "../actions/index";

const initialState = {
    supplyId: '',
    supply: []
    
};

const reducer = ( state = initialState, action ) => {
    console.log(action,state);

    switch(action.type) {
        case ADD_ITEM: 
            return{
                ...state,
                supplyId: action.payload,
                supply: [...state.supply]
            };

        case DELETE_ITEM: 
            return {
                ...state,
                supply: state.supply.filter(supply => supply.supplyId !== action.payload)
            }

        case EDIT_ITEM:
            return {
                ...state,
                supply: state.supply.map(supply => supply.id ===action.payload.id ? action.payload : supply)
            }

        default:
            return state;
    }
}
export default reducer;