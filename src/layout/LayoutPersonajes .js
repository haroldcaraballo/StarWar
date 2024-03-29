import React from 'react';
import { Layout } from 'antd';
import  Personajes from '../components/Personajes';
import Copyright from '../components/Copyright';
const { Header, Footer, Content } = Layout;

const LayoutPersonajes =()=> {
  return (
    <>
    <Layout>
      <Header><h1 className="color-light text-center">PERSONAJES STAR WAR</h1></Header>
      <Content className="my-40">
        <Personajes />
      </Content>    
      <Footer>
         <Copyright />
      </Footer>    
    </Layout>

  </>
  )
}

export default  LayoutPersonajes ;