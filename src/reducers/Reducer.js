import { LOADING_SUPPLYS, SUPPLYS_LOADED, LOGGED_IN, ADD_ITEM, DELETE_ITEM, EDIT_ITEM } from "../actions/index";

const initialState = {
    supplyId: '',
    supply: [],
    mySupplys: [],
    dataLoading:false,
    error: ''
    
};

const reducer = ( state = initialState, action ) => {
    console.log(action,state);

    switch(action.type) {
        case  LOADING_SUPPLYS:
            return {
                ...state,
                dataLoading: true,
                error: ''
            }
        case SUPPLYS_LOADED:
            return {
                ...state,
                supply: action.payload,
                dataLoading: false,
                error: ''
            }
        case LOGGED_IN:
            return {
                ...state,
                supplyID: action.payload,
                mySupplys: state.supply.filter(supplys => supplys.supplyId === action.payload),
                error: ''
            }

        case ADD_ITEM: 
            return{
                ...state,
                supply: [...state.supply, action.payload],
                mySupplys: [...state.mySupplys, action.payload],
                error: ''
            };

        case DELETE_ITEM: 
            return {
                ...state,
                supply: state.supply.filter(supplys => supplys.supplyId !== action.payload),
                mySupplys: [],
                error: ''
            }

        case EDIT_ITEM:
            return {
                mySupplys: [action.payload],
                supply: state.supply.map(supplys => supplys.id === action.payload.id ? action.payload : supplys),
                error: ''
            }

        default:
            return state;
    }
}
export default reducer;