import { ADD_ITEM, DELETE_ITEM } from "../actions/index";

const initialState = {
    additionalPrice: 0,
    produce: {
        price: 3.99,
        name: 'Strawberries',
        image: "https://images.pexels.com/photos/934066/pexels-photo-934066.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
        quantity: 1
    }
};

export const reducer = ( state = initialState, action ) => {
    console.log(action,state);

    switch(action.type) {
        case ADD_ITEM: 
            return{
                ...state,
                produce: {
                    ...state.produce,
                    quantity: 1
                },
                additionalPrice: state.additionalPrice + action.payload.price,
            };

            case DELETE_ITEM: 
                return {
                    ...state,
                    car: {
                        ...state.produce,
                        quantity:1
                    },
                    additionalPrice: state.additionalPrice - action.payload.price,
                }
                default:
                    return state;
    }
}
