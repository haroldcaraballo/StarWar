import React from "react";
import { Switch, Route } from "react-router-dom";
import DetallesPersonaje from "../components/DetallesPersonaje";
import LayoutPersonajes from "../layout/LayoutPersonajes ";

const Rutas = () => {
  return (    
      <Switch>
        <Route
          exact
          path="/"
          component={ LayoutPersonajes  }          
        /> 
        <Route
          exact
          path="/personaje/:id/:id"
          component={ DetallesPersonaje }          
        /> 
      </Switch>    
  );
};

export default Rutas;