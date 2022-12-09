import React from 'react';
import { useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom'
import './App.css';
import Header from './components/Header'
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';

function App() {
  const isLoggedIn = useSelector((state) => state.isLoggedIn)
  return (
    <React.Fragment>
      <header>
        <Header />
      </header>
      <main>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          {isLoggedIn && <Route path='/user' element={<Home />} />}
        </Routes>
      </main>
    </React.Fragment>
  );
}

export default App;
