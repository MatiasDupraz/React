import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from  './components/ItemCount/ItemCount.jsx'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer.jsx'
<<<<<<< HEAD
=======
import { BrowserRouter, Routes, Route } from 'react-router-dom';
>>>>>>> 634422ba53aee7599255a2fd446ebde831261409
function App() {
  return (
    <BrowserRouter>
      <NavBar/>
<<<<<<< HEAD
      <ItemListContainer greeting={"¡Bienvenido a nuestra tienda!"}/>
      <ItemCount initial={0} stock={18} onAdd={(quantity) => console.log('Cantidad agregada: ',quantity)}/>
      <ItemDetailContainer/>
    </div>
=======
      <Routes>
        <Route path='/' element={<ItemListContainer/>}/>
        <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
        <Route path='/item/:itemId' element={<ItemDetailContainer/>}/>
        <Route path='*' element={<h1>Error 404: Not Found.</h1>}/>
      </Routes>    
    </BrowserRouter>
>>>>>>> 634422ba53aee7599255a2fd446ebde831261409
  );
}
export default App;

/*
<ItemListContainer greeting={'¡Bienvenido a nuestra tienda!'}/>
      <ItemCount initial={0} stock={18} onAdd={(quantity) => console.log('Cantidad agregada: ',quantity)}/>
      <ItemDetailContainer/>
*/