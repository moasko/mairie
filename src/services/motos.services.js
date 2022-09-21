import axios from "axios";
import { MOTOS_URL } from "../lib/urls";

export const getAllMotos = ()=>{
    return axios.get(MOTOS_URL)
}


export function creatNewMoto(moto){
    //check if moto object is empty
    if(Object.keys(moto).length === 0){
        return false
    }
    return axios.post(motoEndPoint, moto)
}



export function updateMoto(moto){
    if(Object.keys(moto).length === 0){
        return false
    }
    return axios.put(motoEndPoint,moto)
}


export function deleteMoto(id){
    if(Object.keys(moto).length === 0){
        return false
    }
    return axios.delete(motoEndPoint,id)
}
