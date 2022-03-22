import React from "react";
import { useDispatch } from 'react-redux';
import {  Link } from "react-router-dom"; 
import { obtenerDetallePersonajeAction } from "../actions/personajeActions";
import { Card } from 'antd';
const { Meta } = Card;

const CardPersonaje =({id, personaje, paginacion})=>{  
    const dispatch = useDispatch();  
    const  personajeId = (personajeId)=>{
         dispatch( obtenerDetallePersonajeAction(personajeId));                    
    }
    
    return(   
        <div id={id} className="cardPersonaje">
            <Card               
                cover={
                <img
                    alt={personaje.name}
                    src={`https://via.placeholder.com/50x70?text=${personaje.name}`}
                />
                }
                actions={[  
                //<span type= "button" onClick={()=> personajeId(id)} >Ver detalles</span>,                   
                    <Link to={`/personaje/${paginacion}/${id}`}  onClick={()=> personajeId(id) }>                          
                        Ver detalles                          
                    </Link>                   
                ]}
            >
                <Meta 
                className="text-center"           
                title={personaje.name}         
                />            
            </Card>
        </div>   
    ) 
}
export default CardPersonaje;

