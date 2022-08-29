import { GET_AGENTS } from "../constante";

const initialState = {
    agents: []
}

export const agentReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_AGENTS:
            return {
                ...state,
                agents: action.payload
            }
        // case ADD_MOTO:
        //     return {
        //         ...state,
        //         motos: [...state.motos, action.payload]
        //     }


        default:
            return state;
    }
}

