import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import GameIndex from './GameIndex';
import GameDashboard from './GameDashboard';
import GameHome from './GameHome';

import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes ,Route } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
      {/* <Route path="/message" exact element={<Message/>} /> */}
      {/* <Route path="/photos" exact element={<Photos/>} /> */}
      <Route path="/dev/*" element={<App/>} />
      <Route path="/DIG/*" element={<GameIndex/>} >
      </Route>
    </Routes>
   </BrowserRouter>
  </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
