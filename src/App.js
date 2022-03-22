import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import 'antd/dist/antd.css';
import './styles/styles.min.css';
import { Provider} from 'react-redux';
import store from "./store";
import Rutas from "./routers/Rutas";

const App = () => {
  return (
    <Provider store={store}>
        <Router> 
            <Rutas />         
        </Router> 
    </Provider>
  );
};

export default App;