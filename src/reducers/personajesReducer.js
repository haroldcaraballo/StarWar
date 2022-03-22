import {
    COMENZAR_DESCARGA_PERSONAJES,
    PERSONAJES_CARGADOS,
    PERSONAJES_CARGADOS_ERROR,
    CARGAR_PERSONAJE,
    PERSONAJE_CARGADO,
    PERSONAJE_CARGADO_ERROR
} from '../types';

// cada reducer tiene su propio state
const initialState = {
    personajes: [], 
    personajeId:[],  
    paginacion: 1,
    error: false,
    loading: false, 
    cargado: false,  
}

export default function(state = initialState, action) {
    switch(action.type) {
        case COMENZAR_DESCARGA_PERSONAJES:
            return {
                ...state,
                loading: action.loading,
                
            }
        case PERSONAJES_CARGADOS: 
            return {
                ...state,
                personajes: action.payload,
                loading: action.loading,
                paginacion:action.paginacion

            }
        case PERSONAJES_CARGADOS_ERROR:
            return {
                ...state,
                error: true
            }
        case CARGAR_PERSONAJE:
            return {
                ...state,
                error: true
            }    
            
        case PERSONAJE_CARGADO:
            return {
                ...state,
                personajeId:action.personajeId,
                loading: action.loading
            }  
        case PERSONAJE_CARGADO_ERROR:
            return {
                ...state,
                error: true
            }  

        default:
            return state;
    }
}