import './App.css';
import { Header } from './Components/Header/Header';
import { Routes, Route } from 'react-router-dom';
import { Shop } from './Pages/Shop';
import { ShopCategory } from './Pages/ShopCategory';
import men_banner from './Assets/img/banner_mens.png';
import women_banner from './Assets/img/banner_women.png';
import kid_banner from './Assets/img/banner_kids.png';
import { Product } from './Pages/Product';
import { Cart } from './Pages/Cart';

function App() {
  return (
    <>
    <Header/>
    <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/mens' element={<ShopCategory banner = {men_banner} category="men"/>}/>
        <Route path='/womens' element={<ShopCategory banner = {women_banner} category="women"/>}/>
        <Route path='/kids' element={<ShopCategory banner = {kid_banner} category="kid"/>}/>
        <Route path='/product' element={<Product />}>
          <Route path=':productId' element={<Product />}/>
        </Route>
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
    <div className='container'></div>
  </>
  );
}

export default App;
