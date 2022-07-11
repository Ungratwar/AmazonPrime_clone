
import './App.css';
import Navbar from './Componentes/Navbar';
import {BrowserRouter} from "react-router-dom";
import Routing from './Componentes/Routing';


function App() {
  return (
    <BrowserRouter>
  
      <Navbar/>
      <Routing/>
    </BrowserRouter>

  );
}

export default App;
