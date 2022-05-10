import React from 'react';
import './App.css';
import Header from './Componets/Header/Header';
import Navbar from './Componets/Navbar/Navbar';
import Profile from './Componets/Profile/Profile';
import Dialogs from './Componets/Dialogs/Dialogs';
import News from './Componets/News/News';
import Music from './Componets/Music/Music';
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
          <Route path="/news" element={<News />} />
          <Route path="/music" element={<Music />} />
        </Routes>
     </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
