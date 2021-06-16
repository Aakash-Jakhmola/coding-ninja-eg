import React from 'react';
import ReactDOM from 'react-dom';
import MainContainer from './components/maincontainer'
import Footer from './components/Footer'
import Header from './components/Header'

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <div className="sized-box-100"></div>
    <MainContainer/>
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);

