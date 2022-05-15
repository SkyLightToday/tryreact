import React from 'react';
import './App.css';
import Header from './Componets/Header/Header';
import Navbar from './Componets/Navbar/Navbar';
import Profile from './Componets/Profile/Profile';
import DialogsContainer from './Componets/Dialogs/DialogsContainer';
import News from './Componets/News/News';
import Music from './Componets/Music/Music';
// import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {Routes, Route} from 'react-router-dom';
import Friends from './Componets/Friends/Friends';

const App = (props) => {


  return (
    // <BrowserRouter>
    <div className="App-wrapper">
      <Header />
      <Navbar />
     <div className="App-wrapper-content">
       <Routes>
       {/* <Route path="/dialogs/*" element={<Dialogs store={props.store} state={props.state.dialogsPage}  />} /> */}
          <Route path="/dialogs/*" element={<DialogsContainer store={props.store} />} />
          <Route path="/profile" element={<Profile store={props.store} />} />
          {/* <Route path="/profile" element={<Profile profilePage={props.state.profilePage} dispatch={props.dispatch} />} /> */}
          <Route path="/news" element={<News />} />
          <Route path="/music" element={<Music />} />
          <Route path="/friends" element={<Friends />} />
        </Routes>
     </div>
    </div>
    // </BrowserRouter>
  );
}

export default App;

// state={props.state.dialogsPage}
// state={props.state.dialogsPage}
