import logo from './logo.svg';
import './App.css';
import { useState } from "react"
import React from 'react';
import Navbar from './components/NavBar/NavBar'
import Button from './components/Button/Button';
import ItemsListContainer from './components/ItemsListContainer/ItemsListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Route, Routes } from 'react-router-dom';



function App() {
  // const [page, setPage] = useState('list')

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar logo='Heladeria'/>
        <Routes>
          <Route path="/" element={<ItemsListContainer />}/>
          <Route path="/products" element={<ItemsListContainer />}/>
          <Route path="/product/:productId" element={<ItemDetailContainer/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
