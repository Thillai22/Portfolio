import React from 'react';
import { render } from 'react-dom';
import './index.css';
import App from './App';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";

class Section extends React.Component {
  render(){
    return(
      <>
      <App/>
      </>
    );
  }
};
render(<Section />, document.getElementById('root'));


