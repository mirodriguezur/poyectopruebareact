import './App.css';
import React from 'react';
import { Link, Route, Switch } from "react-router-dom";
const Home = () => (
  <div>
  <h2>Home</h2>
  </div>
 );
 const Category = () => (
  <div>
  <h2>Category</h2>
  </div>
 );
 const Products = () => (
  <div>
  <h2>Products</h2>
  </div>
 );

 export default function App() {
  return (
    <div>
      <nav className="navbar navbar-light">
        <ul className="nav navbar-nav">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/category">Category</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
        </ul>
      </nav>
  {/* Los componentes de la ruta se representan si la propieda
 d de la ruta coincide con la URL actual */}
  <Route path="/">
  <Home />
  </Route>
  <Route path="/category">
  <Category />
  </Route>
  <Route path="/products">
  <Products />
  </Route>
  </div>
  );
 }
