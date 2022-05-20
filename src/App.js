import React from 'react';
import './App.css';
import Navbar from './Componets/Navbar/Navbar';
import DialogsContainer from './Componets/Dialogs/DialogsContainer';
import News from './Componets/News/News';
import Music from './Componets/Music/Music';
import {Routes, Route} from 'react-router-dom';
import Friends from './Componets/Friends/Friends';
import UsersContainer from './Componets/Users/UsersContainer';
import ProfileContainer from './Componets/Profile/ProfileContainer';
import HeaderContainer from './Componets/Header/HaederContainer';

const App = (props) => {


  return (
    <div className="App-wrapper">
      <HeaderContainer />
      <Navbar />
     <div className="App-wrapper-content">
       <Routes>
          <Route path="/dialogs/*" element={<DialogsContainer />} />
          <Route path="/profile/*" element={<ProfileContainer />} />
          <Route path="/profile/*:userId" element={<ProfileContainer />} />
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

//store={props.store}-ProfileContainer and DialodsContainer
//<Route path="/profile/*" element={<ProfileContainer />} />
