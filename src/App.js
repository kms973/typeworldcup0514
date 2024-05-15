
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import React from 'react';
import { Main } from './pages/main/main';

function App() {


  return (
   <Router>
    
      <Routes>
        <Route exact path='/' element={<Navigate to={"/main"} />}/>
        <Route exact path='/main' element={<Main/>}/>
      </Routes>
   
   </Router>
  );
}

export default App;
