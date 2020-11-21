import React from 'react';
import {
  BrowserRouter, 
  Routes,
  Route
} from "react-router-dom";
import Home from './Components/Home';
import About from './Components/About';
import Product from './Components/Product';
import ProductItem from './Components/ProductItem';
import Error from './Components/Error';

function RouteConfig() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home/>}>
            <Route path="about" element={<About/>}/>
            <Route path="product" element={<Product/>}/>
            <Route exact path="product/:id" element={<ProductItem/>}/>
          </Route>
          <Route path="*" element={<Error/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default RouteConfig;

