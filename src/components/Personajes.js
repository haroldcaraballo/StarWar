import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { obtenerPersonajesAction } from "../actions/personajeActions";
import CardPersonaje from '../hooks/CardPersonaje';
import { Pagination , Row, Col } from 'antd';
import Loading from '../components/Loading';

const Personajes = () => {
  const dispatch = useDispatch();  
  const [statePaginacion , setPaginacion ] = useState({
    paginaActual: 1  
  });
  useEffect(() => {
      // Consultar API de personajes
      const cargarPersonajes = () => dispatch( obtenerPersonajesAction()  );
      cargarPersonajes ();   
  }, [dispatch]);

  const paginacion= (page) => {    
    setPaginacion({
      ...statePaginacion,
      paginaActual: page
    });
    dispatch( obtenerPersonajesAction(page)); 
  };

  const personajes=  useSelector(state => state.listaPersonajes.personajes);
  const loading =  useSelector(state => state.listaPersonajes.loading);
  return (
    <>      
      {
          (loading===true) 
           ? 
           <div>
              <Loading />
           </div> 
           :                
          (
           <div className="container"> 
            <Row >                
              {
                personajes.map((personaje, index) =>(
                  <Col  key = { index } xs={24} sm={12} md={8} lg={8} xl={6} xxl={6}>
                      <CardPersonaje                      
                        id ={ index + 1 }
                        personaje= { personaje }
                        paginacion= { statePaginacion.paginaActual }                       
                      /> 
                  </Col>                                
                ))
              }              
            </Row>
            <Row>    
                <div className="container">
                    <Col className="text-center my-40" xs={24}>
                      <Pagination defaultCurrent={ 1 }  pageSize= {10} total={83}  onChange={ paginacion } />
                    </Col>  
                </div>                     
            </Row>
            </div>
          )          
      }
    </>
  );
};

export default Personajes;