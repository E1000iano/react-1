import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import CartWidget from './components/CartWidget/CartWidget';

function App() {
  return (
    <div className="App">
     
     <Navbar/>     <CartWidget/>
     
    

     <ItemListContainer greeting = {'wenas'} />
        
        
    </div>
  );
}

export default App;