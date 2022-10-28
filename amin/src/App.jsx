import React from 'react';
import {Routes ,Route} from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import Contact from './components/pages/Contact';
import About from './components/pages/About';

function App() {
  return (
    <>
       <div className="container">
        <React.Fragment>
          <Navbar/>
        <Routes>
          <Route path='/' element={<Header/>} />
          <Route path={'/contact'} element={<Contact/>}/>
          <Route path={'/about'} element={<About/>}/>
        </Routes>
        </React.Fragment>
       </div> 
    </>
   
   
  );
}

export default App;
