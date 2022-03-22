import { combineReducers } from 'redux';
import personajesReducer from './personajesReducer';

export default combineReducers({
    listaPersonajes: personajesReducer,   
});