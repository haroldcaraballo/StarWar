import React, {useState, useEffect} from 'react'
import { Spin } from 'antd';
const Loading = () => {
  const [carga, setCarga]= useState(true);
         
  return (
    <div className="loading-container">
      <div className="loading text-center">
          <Spin size="large" />          
             <p>Cargando</p>         
      </div>
    </div>
  )
}

export default Loading