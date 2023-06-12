import './App.css';
import Navbar from './components/NavBar/NavBar';
import "bulma/css/bulma.css";
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <ItemListContainer/>
    </div>
  );
}

export default App;
