import React from 'react';
import Navigation from './components/navigation';
import Footer from './components/footer';

import 'bootstrap/dist/css/bootstrap.min.css';
import './scss/styles.scss';

export default function App(props) {
  return (
    <div>
      <div>
        <Navigation />   
        {props.children}
        <Footer />
      </div>
    </div>
  )
}
