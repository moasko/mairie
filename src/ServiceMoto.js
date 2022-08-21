import axios from "axios";

const motoEndPoint = "https://motomairie.herokuapp.com/api/motos"

export function obtenirLesMotos(){
    return axios.get(motoEndPoint)
}

export function creerUneNovelleMoto(moto){
    return axios.post(motoEndPoint, moto)
}

export function modifierUneMoto(moto){
    return axios.put(motoEndPoint + "/" + moto.id, moto)
}

export function supprimerUneMoto(id){
    return axios.delete(motoEndPoint + "/" + id)
}
