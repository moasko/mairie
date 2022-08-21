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
    return axios.put(motoEndPoint + "/" + moto.id, moto)
}

export function supprimerUneMoto(id){
    return axios.delete(motoEndPoint + "/" + id)
}
