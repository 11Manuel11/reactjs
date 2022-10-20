import { useState } from 'react'
import './App.css';
import Navbar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemsListContainer/ItemsListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

function App() {
  // const [page, setPage] = useState('list')

  return (
    <div className="App"> 
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<ItemListContainer />}/>
          <Route path='/category/:category' element={<ItemListContainer />}/>
          <Route path='/detail/:productId' element={<ItemDetailContainer />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
