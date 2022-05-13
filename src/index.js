import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './Redux/state';
//import {addPosts, updateNewPostText, subscribe} from './Redux/state';
import {BrowserRouter} from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
let rerenderEntireTree = (state) => {
  // const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  {/* // <React.StrictMode> */}
     <App state={state} dispatch={store.dispatch.bind(store)} store={store} />
    {/* <App state={state} dispatch={store.dispatch.bind(store)} /> */}
  {/* // </React.StrictMode> */}
  </BrowserRouter>
);
 }

rerenderEntireTree(store.getState());
store.subscribe(rerenderEntireTree);

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <BrowserRouter>
//   {/* // <React.StrictMode> */}
//     <App state={state} addPosts={addPosts} />
//   {/* // </React.StrictMode> */}
//   </BrowserRouter>
// );




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
