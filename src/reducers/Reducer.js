import { LOADING_SUPPLYS, SUPPLYS_LOADED, LOGGED_IN, ADD_ITEM, DELETE_ITEM, UPDATE_ITEM } from "../actions/index";

const initialState = {
    id: '',
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
            };

        case DELETE_ITEM: 
            // let RemovedItem = state.supply.filter(item => {
            //     if (item.id !== action.payload) {
            //         return item;
            //     }
            // })
            // return {...state, supply: RemovedItem};
            return {...state, supply: [...state.supply]}
            
        case UPDATE_ITEM:
            return {
                ...state, 
                id: action.payload,
                supply: [...state.supply],
            }

        default:
            return state;
        }
}
export default reducer;