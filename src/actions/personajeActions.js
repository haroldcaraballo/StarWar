import {
    COMENZAR_DESCARGA_PERSONAJES,
    PERSONAJES_CARGADOS,
    PERSONAJES_CARGADOS_ERROR,    
    CARGAR_PERSONAJE,
    PERSONAJE_CARGADO,
    PERSONAJE_CARGADO_ERROR

} from '../types';
import clienteAxios from '../config/axios';

// Función obtener todos los personajes
export function obtenerPersonajesAction( pagina = 1 ) {
    return async (dispatch) => {
        dispatch( descargarPersonajes() );
            try {
                const respuesta = await clienteAxios.get(`/people?page=${pagina}`);
                dispatch( descargaPersonajesExitosa(respuesta.data.results, pagina));                            
            } catch (error) {
                console.log(error);
                dispatch( descargaPersonajesError() )
            }
    }
}

const descargarPersonajes = ( pagina ) => ({
    type: COMENZAR_DESCARGA_PERSONAJES,
    payload: true,
    loading:true,    
});

const descargaPersonajesExitosa = (personajes, pagina) => ({
    type: PERSONAJES_CARGADOS,
    payload: personajes,
    paginacion: pagina,
    loading:false, 
})
const descargaPersonajesError = () => ({
    type: PERSONAJES_CARGADOS_ERROR, 
    payload: true,
    loading:false, 
});

// Función obtener detalle del personaje
export function obtenerDetallePersonajeAction(id) {   
    return async (dispatch) => {
        dispatch( cargarPersonaje() );
            try {                
                const respuesta = await clienteAxios.get(`/people/${id}`);              
                dispatch( descargaDetallePersonajeExitosa(respuesta.data)); 

                                                                              
            } catch (error) {
                console.log(error);
                dispatch( descargaDetallePersonajesError() )
            }
    }
}

const cargarPersonaje = () => ({
    type: CARGAR_PERSONAJE,
    payload: true,
    loading:true
});

const descargaDetallePersonajeExitosa = (personaje)=> ({
    type: PERSONAJE_CARGADO,
    personajeId: personaje,
    loading: false
})
const descargaDetallePersonajesError = () => ({
    type: PERSONAJE_CARGADO_ERROR, 
    payload: true
});