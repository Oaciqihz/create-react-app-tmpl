import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "@/locales/config";
import '@/style/index.css';
import 'antd/dist/reset.css';
import "@/style/default.scss";
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
