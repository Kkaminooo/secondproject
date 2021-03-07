import React from 'react';
import ReactDOM from 'react-dom';
import './css/style.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Content from "./components/Content";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Newsletter from "./components/Newsletter";
import SimpleSlider from "./components/Slider";
import Logotype from "./components/Logotype";

ReactDOM.render(
  <React.StrictMode>
    <Logotype/>
    <Header/>
    <SimpleSlider/>
    <Content/>
    <Newsletter/>
    <Footer/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
