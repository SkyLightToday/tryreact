import React from 'react';
import './App.css';
import Header from './Componets/Header/Header';
import Navbar from './Componets/Navbar/Navbar';
import Profile from './Componets/Profile/Profile';
import DialogsContainer from './Componets/Dialogs/DialogsContainer';
import News from './Componets/News/News';
import Music from './Componets/Music/Music';
import {Routes, Route} from 'react-router-dom';
import Friends from './Componets/Friends/Friends';
import UsersContainer from './Componets/Users/UsersContainer';

const App = (props) => {


  return (
    <div className="App-wrapper">
      <Header />
      <Navbar />
     <div className="App-wrapper-content">
       <Routes>
          <Route path="/dialogs/*" element={<DialogsContainer store={props.store} />} />
          <Route path="/profile" element={<Profile store={props.store} />} />
          <Route path="/news" element={<News />} />
          <Route path="/music" element={<Music />} />
          <Route path="/friends" element={<Friends />} />
          <Route path="/users" element={<UsersContainer />} />
        </Routes>
     </div>
    </div>
  );
}

export default App;
