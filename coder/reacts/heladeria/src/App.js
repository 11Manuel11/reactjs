import logo from './logo.svg';
import './App.css';
import React from 'react';
import NavBar from './components/NavBar/NavBar';
import Button from './components/Button/Button';
import ItemListContainer from './components/ItemsListContainer/ItemsListContainer';

function App() {
  return (
    <div className="App">      
      <NavBar logo='Helados' />
      <ItemListContainer name='Manuel 11' />
      
    </div>
  );
}

export default App;
