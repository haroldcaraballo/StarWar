import React from 'react';
import { Card , Layout, Row, Col} from 'antd';
import { useSelector } from 'react-redux';
import Topbar from './Topbar';
import Copyright from './Copyright';

export default function DetallesPersonaje(id) {
  const { Footer, Content } = Layout;
  const personaje=  useSelector(state => state.listaPersonajes.personajeId); 
  return (
    <Layout>      
       <Topbar />   
      <Content style={{ minHeight: 300}}>
      <Row justify="center" > 
        <Col xl={12}> 
            <div className="site-card-border-less-wrapper align-center mr">
              <Card
                style={{ minWidth: 300 }}
                cover={
                  <img
                  alt={personaje.name}
                    src={`https://via.placeholder.com/200x70?text=${personaje.name}`}
                  />
                }                
              >
                <div>
                  <p><strong>Nombre: {personaje.nombre}</strong></p>
                  <p><strong>Cumpleaño: {personaje.birth_year}</strong></p>
                  <p><strong>Color de ojos: {personaje.eye_color}</strong></p>
                  <p><strong>Género: {personaje.gender}</strong></p>
                  <p><strong>Color de cabello: {personaje.hair_color}</strong></p>
                  <p><strong>Altura: {personaje.heigh}</strong></p>
                  <p><strong>Masa: {personaje.mass}</strong></p>
                  <p><strong>Color de piel: {personaje.skin_color}</strong></p>
                  <p><strong>Editado: {personaje.created}</strong></p>
                </div>
              
              </Card>
            </div>
        </Col>
       </Row>
      </Content>
      <Footer>
        <Copyright />
      </Footer>
  </Layout>     
  )
}