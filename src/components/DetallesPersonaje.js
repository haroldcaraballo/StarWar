import React from 'react';
import { Card , Layout, Row, Col} from 'antd';
import { useDispatch, useSelector } from 'react-redux';

export default function DetallesPersonaje(id) {
  const { Header, Footer, Content } = Layout;
  const personaje=  useSelector(state => state.listaPersonajes.personajeId); 
  return (
    <Layout>
      <Header>
        <h1 className="color-light text-center">{personaje.name}</h1>
        </Header>
      <Content style={{ minHeight: 620}}>
      <Row justify="center" > 
        <Col xl={12}> 
            <div className="site-card-border-less-wrapper align-center">
              <Card title="Card title" bordered={false} style={{ maxWidth: 900 }}>
                <p>Card content</p>
                <p>Card content</p>
                <p>Card content</p>
              </Card>
            </div>
        </Col>
       </Row>
      </Content>
      <Footer className="text-center">Test Reactjs</Footer>
  </Layout>     
  )
}