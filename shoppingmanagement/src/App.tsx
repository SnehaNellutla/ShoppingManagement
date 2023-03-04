import React from 'react';
import logo from './logo.svg';
import './App.css';
import LoginPage from './components/LoginPage';
import { BrowserRouter, Route } from 'react-router-dom';
import MainPage from './components/MainPage';
import { Routes } from 'react-router';
import Employee from './components/Employee';
import { Customer } from './components/Customer';
import { Product } from './components/Product';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
     
   
<Routes>
<Route  path='/' element={<LoginPage/>} />
    <Route path='/mainpage' element={< MainPage/>}/>
    <Route path='/emp' element={< Employee/>}/>
    <Route path='/cust' element={< Customer/>}/>
    <Route path='/prod' element={< Product/>}/>
</Routes>
</div>
   


    </BrowserRouter>
    
  );
}

export default App;
