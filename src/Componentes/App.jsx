import './App.css';
import { ItemListContainer } from './ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './ItemDetailContainer/ItemDetailContainer.jsx';
// Componentes
import { Navbar } from './Navbar/Navbar';

export const App = () => {
  return (
    <>
       <Navbar/>
       <ItemListContainer/>
       <ItemDetailContainer/>
    </>
  )
}