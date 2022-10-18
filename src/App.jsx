import React, { useState, useEffect } from 'react';
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import Products from './Components/Products';
import About from './Components/About';
import Contact from './Components/Contact';
import { jsx } from '@emotion/react';
import { PropagateLoader } from 'react-spinners';

import './App.css';

function App() {
  const [loading, setLoading] = useState(false);

  const override = jsx`
    display: block;
    border-color: red;
    margin-top: 20%;
  `;

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000)
  }, []);

  return (
    <div>
      {
        loading ?
          <PropagateLoader color={"#3d2514"} loading={loading} css={override} size={40} />
          :
          <>
            <Navbar></Navbar>
            <Header></Header>
            <Products></Products>
            <About></About>
            <Contact></Contact>
          </>
      }
    </div>
  );
}

export default App;
