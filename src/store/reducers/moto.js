import { GET_MOTOS, ADD_MOTO } from "../constante";

const initialState = {
    motos: []
}

export const motoReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_MOTOS:
            return {
                ...state,
                motos: action.payload
            }
        case ADD_MOTO:
            return {
                ...state,
                motos: [...state.motos, action.payload]
            }


        default:
            return state;
    }
}

