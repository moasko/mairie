import {GET_AGENTS} from '../constante'

export const getAgents = (agents)=>{

    return {
        type: GET_AGENTS,
        payload: agents
    }
}