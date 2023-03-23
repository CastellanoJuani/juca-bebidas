import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { ItemListContainer } from './ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './ItemDetailContainer/ItemDetailContainer.jsx';
// Componentes
import { Navbar } from './Navbar/Navbar';

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<ItemListContainer/>}/>
          <Route path='/category/:idCategoria' element={<ItemListContainer/>}/>
          <Route path='/item/:id'element={<ItemDetailContainer/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}