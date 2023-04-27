import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import './style.css'; 

function App() {
  return (
    <div className="App">
     
     <Navbar/> 
     
     <ItemListContainer greeting = {'wenas'} />
        
        
    </div>
  );
}

export default App;