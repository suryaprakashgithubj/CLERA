import React from 'react';
import './log.css';
import LoginPage from './log';
import Form from './FormValidator';
import './style.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

const a = () => {
  return (
    <BrowserRouter>
    
    <div className="App">
    <Routes>
    <Route path="/Login" element={<LoginPage/>}></Route>
    <Route path="/Register" element={<Form/>}></Route>
    </Routes>
    </div>
    </BrowserRouter>

  );
};

export default a;