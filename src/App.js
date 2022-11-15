import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MyNavBar from './components/navbar/NavBarPersonalized.js';
import logo from  './particl.svg';
import { Route, Routes } from 'react-router-dom';
import { ProductoListComponent } from './components/products/ProductoList';
import { ShopCar } from './components/shopping/ShopCar';
function App() {
  
  return (
    <div className="App">
      <MyNavBar src={logo}></MyNavBar>
      <Routes>
        <Route path='/' element={<ProductoListComponent></ProductoListComponent>}>
        </Route>
        <Route path='/shopping' element={
          <ShopCar></ShopCar>
        }>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
