import React from 'react';
import './App.css';
import Header from './Componets/Header/Header';
import Navbar from './Componets/Navbar/Navbar';
import Profile from './Componets/Profile/Profile';
import Dialogs from './Componets/Dialogs/Dialogs';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
    <div className="App-wrapper">
      <Header />
      <Navbar />
     <div className="App-wrapper-content">
       <Routes>
          <Route path="/dialogs" element={<Dialogs />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
     </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
