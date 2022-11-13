import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MyNavBar from './components/navbar/NavBarPersonalized.js';
import logo from  './particl.svg';
import { Route, Routes } from 'react-router-dom';
import { ProductoListComponent } from './components/products/ProductoList';
function App() {
  
  return (
    <div className="App">
      <MyNavBar src={logo}></MyNavBar>
      <Routes>
        <Route path='/' element={<ProductoListComponent></ProductoListComponent>}>
        </Route>
        <Route path='/products' element={
          <h1>Hola desde products</h1>
        }>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
