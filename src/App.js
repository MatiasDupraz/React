import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from  './components/ItemCount/ItemCount.jsx'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer.jsx'
function App() {
  return (
    <div>
      <NavBar/>
      <ItemListContainer greeting={"¡Bienvenido a nuestra tienda!"}/>
      <ItemCount initial={0} stock={18} onAdd={(quantity) => console.log('Cantidad agregada: ',quantity)}/>
      <ItemDetailContainer/>
    </div>
  );
}
export default App;