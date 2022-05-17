import React from 'react';
import {BrowserRouter , Routes, Route, } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/pages/HomePage/Home';
import Services from './components/pages/Services/Services';
import Products from './components/pages/Products/Products';
import SignUp   from './components/pages/SignUp/SignUp';
import Footer   from './components/pages/Footer.js/Footer';




function App() {

    return (
      <BrowserRouter>
      <Navbar />
      {/* <Home /> */}
      {/* <Services />
      <Products />
      <SignUp /> */}


      <Routes>
        <Route path='/' exact element={ <Home />} />
        <Route path='/services' element={ <Services />} />
        <Route path='/products' element={ <Products />} /> 
        <Route path='/sign-up' element={ <SignUp />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}










export default App;
