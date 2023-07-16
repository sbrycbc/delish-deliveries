import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Home from '../pages/Home';
import AllFoods from '../pages/AllFoods';
import FoodDetails from '../pages/FoodDetails';
import Cart from '../pages/Cart';
import Checkout from '../pages/Checkout';
import Login from '../pages/Login';
import ÜberUns from '../pages/ÜberUns';
import Register from '../pages/Register';
import Payment from '../pages/Payment';



const Routers = () => {
  return (
  <Routes>
    <Route path='/' element={<Navigate to='/home'/>} />
    <Route path='/home' element={ <Home/> } />
    <Route path='/foods' element={ <AllFoods/> } />
    <Route path='/foods/:id' element={ <FoodDetails/> } />
    <Route path='/cart' element={ <Cart/> } />
    <Route path='/checkout' element={ <Checkout/> } />
    <Route path='/login' element={ <Login/> } />
    <Route path='/überuns' element={ <ÜberUns/> } />
    <Route path='/register' element={ <Register/> } />
    <Route path='/payment' element={ <Payment/> } />
   </Routes>
  );
};

export default Routers;