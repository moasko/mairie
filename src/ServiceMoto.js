import axios from "axios";

const motoEndPoint = "https://motomairie.herokuapp.com/api/motos"

export function obtenirLesMotos(){
    return axios.get(motoEndPoint)
}

export function creerUneNovelleMoto(moto){
    //check if moto object is empty
    if(Object.keys(moto).length === 0){
        return false
    }
    return axios.post(motoEndPoint, moto)
}

export function modifierUneMoto(moto){
    if(Object.keys(moto).length === 0){
        return false
    }
    return axios.put(motoEndPoint,moto)
}

export function supprimerUneMoto(moto){
    if(Object.keys(moto).length === 0){
        return false
    }
    return axios.delete(motoEndPoint,moto)
}
