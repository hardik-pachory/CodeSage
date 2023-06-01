import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import { useState } from 'react';
import { AuthProvider } from './auth';
import { RequireAuth } from './components/RequireAuth';
import Profile from './components/Profile';
import Home from './components/Home';
import IDE from './components/IDE';
import { Footer } from './components/Footer';
import { LoginCompo } from './components/LoginCompo';
import Error from './components/Error';
import Register from './components/Register';
import Practise from './components/Practise';
import Problem from './components/Problem';
import Admin from './components/Admin';

const AppLayout = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='contact' element={<h2>Contact</h2>} />
        <Route path='about' element={<h2>About</h2>} />
        <Route path='practise' element={<Practise />} />
        <Route path='login' element={<LoginCompo />} />
        <Route
          path='profile'
          element={
            <RequireAuth>
              <Profile />
            </RequireAuth>
          }
        />
        <Route path='IDE' element={<IDE />} />
        <Route path='problem' element={<Problem />} />
        <Route path='admin' element={<Admin />} />
        <Route path='register' element={<Register />} />
        <Route path='404' element={<Error />} />
        {/* <Route path="*" element={<Navigate to="/404" />} /> */}
      </Routes>
      <Footer />
    </>
  );
};

const App = () => {
  const [auth, setAuth] = useState(false);

  return (
    <AuthProvider>
      <BrowserRouter>
        <AppLayout />
      </BrowserRouter>
    </AuthProvider>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
