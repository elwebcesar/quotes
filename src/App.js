import React, { useState, useEffect, Fragment } from 'react';
//import styled from '@emotion/styled';

import Frase from './components/Frase';
import Loader from './components/loader/loader';
import Series from './components/series';
import About from './components/About';

import images from './assests/images';


function App() {

  // useState
  const [ frase, guardarFrase ] = useState({});


  // Funciones
  const consultarAPI = async () => {
    const api = await fetch('https://www.breakingbadapi.com/api/quote/random');
    const frase = await api.json();
    guardarFrase(frase[0]);
    guardarcargando(false);
  }

  const [ cargando, guardarcargando ] = useState(true);


  // useEffect - cargar una frase
  useEffect( () => {
    consultarAPI()
  }, [] );


  return (
    <Fragment>
      <div className="content">
        <header className="header">
          <h1>A QUOTE, A MEMORY</h1>
        </header>
        <section className="quote">
          <article>
            <div className="quote__content">
              { cargando
                ? 
                <Frase 
                  frase = {frase}
                  guardarcargando = {guardarcargando}
                />
                :
                <Loader />
              }
            </div>
            <p className={ frase.series === 'Breaking Bad'  ? "txt_right": null }>{frase.author}</p>
            <button
              type="button"
              onClick = {consultarAPI}
            >ONE MORE QUOTE</button>
          </article>
        </section>  
      </div>
      <section className="series">
        <Series 
          images = {images}
          fraseSerie = {frase.series}
        />
        <About
          images = {images}
        />
      </section>
    </Fragment>
  );
}

export default App;

//https://breakingbadapi.com/documentation