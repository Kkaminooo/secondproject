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

reportWebVitals();
