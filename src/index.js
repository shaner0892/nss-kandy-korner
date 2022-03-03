import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { KandyKorner } from './components/KandyKorner';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom'

//<BrowserRouter> tells React "I will be placing Routes in my KandyKorner component."
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter >
      <KandyKorner />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
