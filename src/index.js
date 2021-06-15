import React from 'react';
import ReactDOM from 'react-dom';
import MainContainer from './components/maincontainer'
import Heading from './components/Heading'

ReactDOM.render(
  <React.StrictMode>
    <Heading />
    <MainContainer/>
  </React.StrictMode>,
  document.getElementById('root')
);

