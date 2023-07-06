import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from  './components/ItemCount/ItemCount.jsx'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<ItemListContainer/>}/>
        <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
        <Route path='/item/:itemId' element={<ItemDetailContainer/>}/>
        <Route path='*' element={<h1>Error 404: Not Found.</h1>}/>
      </Routes>    
    </BrowserRouter>
  );
}
export default App;

/*
<ItemListContainer greeting={'¡Bienvenido a nuestra tienda!'}/>
      <ItemCount initial={0} stock={18} onAdd={(quantity) => console.log('Cantidad agregada: ',quantity)}/>
      <ItemDetailContainer/>
*/