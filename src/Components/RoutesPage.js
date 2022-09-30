import React from 'react'

import {Route, Routes} from 'react-router-dom'

import SignInSide from './SignInpage';
import ProductViewPage from './ProductViewPage';
import SignUpSide from './SignUppage';
import Card from './Card';
import LoginPage from './LoginPage';
import RegistrationForm from './RegistrationForm';
import PaymentForm from './PaymentForm';
import AddressForm from './AddressForm';
import Checkout from './Checkout';
function RoutesPage() {
  return (
    <>
    <Routes>
        <Route path='/signup' element={<LoginPage/>}/>
        <Route path='/' element={<RegistrationForm/>}/>
        <Route path='/productItem' element={<ProductViewPage/>}/>
        <Route path='/AddtoCard' element={<Card/>}/>
        <Route path='/order' element={<AddressForm/>}/>
        <Route path='/checkout' element={<Checkout/>}/>
         
        <Route path='/payment' element={<PaymentForm/>}/>
    </Routes>
      
    </>
  )
}

export default RoutesPage;
