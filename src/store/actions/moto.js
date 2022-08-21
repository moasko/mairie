import { GET_MOTOS, ADD_MOTO } from "../constante";

export const getMotos = (motos) => {
  return {
    type: GET_MOTOS,
    payload:motos
  };
}

export const addMoto = (moto) => {
  return {
    type: ADD_MOTO,
    payload:moto
  };
}