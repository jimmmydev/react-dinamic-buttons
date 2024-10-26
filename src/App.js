import React, { useState } from 'react';
import { Collapse } from 'react-collapse';
import './App.css';

import ReactiveButton1 from './components/reactive-button-examples/reactive-button-1';
import ReactiveButton2 from './components/reactive-button-examples/reactive-button-2';
import ReactiveButton3 from './components/reactive-button-examples/reactive-button-3';
import ReactiveButton4 from './components/reactive-button-examples/reactive-button-4';
import ReactiveButton5 from './components/reactive-button-examples/reactive-button-5';
import ReactiveButton6 from './components/reactive-button-examples/reactive-button-6';
import SlideEffect1 from './components/slide-efect/slide-effect-1';
import InteractiveButton1 from './components/interactive/interactive-button-1';

function App() {
  const [isReactiveButtonOpen, setReactiveButtonOpen] = useState(false);
  const [isSlideEffectButtonOpen, setSlideEffectButtonOpen] = useState(false);
  const [isInteractiveButtonOpen, setInteractiveButtonOpen] = useState(false);

  return (
    <div className="App">
      <h1>Proyecto de Ejemplos con Librerías en React</h1>

      <p>
        Este proyecto muestra diferentes ejemplos de librerías populares de React. 
        Cada sección incluye un pequeño tutorial sobre cómo instalar y usar la librería 
        en tu propio proyecto.
      </p>

      <div className="accordion-section">
        <h2 onClick={() => setReactiveButtonOpen(!isReactiveButtonOpen)}>
          {isReactiveButtonOpen ? '▼ ' : '► '} Reactive Buttons
        </h2>
        <Collapse isOpened={isReactiveButtonOpen}>
          <div className="accordion-content">
            <h3>Instalación</h3>
            <p>
              La librería <code>reactive-buttons</code> permite crear botones con estados interactivos, 
              como <strong>idle</strong>, <strong>loading</strong>, <strong>success</strong>, y <strong>error</strong>.
            </p>
            <p>
              <strong>Comando para instalar la librería:</strong>
              <pre><code>npm install reactive-button</code></pre>
            </p>

            <h3>reactive-button-1</h3>
            <ReactiveButton1 />
            <h3>reactive-button-2</h3>
            <ReactiveButton2 />
            <h3>reactive-button-3</h3>
            <ReactiveButton3 />
            <h3>reactive-button-4</h3>
            <ReactiveButton4 />
            <h3>reactive-button-5</h3>
            <ReactiveButton5 />
            <h3>reactive-button-6</h3>
            <ReactiveButton6 />
          </div>
        </Collapse>
      </div>

      <div className="accordion-section">
        <h2 onClick={() => setSlideEffectButtonOpen(!isSlideEffectButtonOpen)}>
          {isSlideEffectButtonOpen ? '▼ ' : '► '} Slide Effect Buttons
        </h2>
        <Collapse isOpened={isSlideEffectButtonOpen}>
          <div className="accordion-content">
            <p>
              No requiere de una librería para hacer el efecto, está implementado en HTML y CSS.<br/>
              El efecto se produce según por el lado que entres en el botón.
            </p>
            <h3>slide-efect-1</h3>
            <SlideEffect1 role="button">Entra en el bóton por distintos lados</SlideEffect1>
          </div>
        </Collapse>
      </div>

      <div className="accordion-section">
        <h2 onClick={() => setInteractiveButtonOpen(!isInteractiveButtonOpen)}>
          {isInteractiveButtonOpen ? '▼ ' : '► '} Interactive buttons
        </h2>
        <Collapse isOpened={isInteractiveButtonOpen}>
          <div className="accordion-content">
            <h3>Dependencias</h3>
            <p>
              Este botón necesita la librería de font-awesome instalada.<br /><br/>
              <strong>Comando para instalar la librería:</strong>
              <pre><code>npm i --save @fortawesome/fontawesome-svg-core</code></pre>
              <pre><code>npm i --save @fortawesome/free-solid-svg-icons</code></pre>
              <pre><code>npm i --save @fortawesome/free-regular-svg-icons</code></pre>
              <pre><code>npm i --save @fortawesome/free-brands-svg-icons</code></pre>
              <pre><code>npm i --save @fortawesome/react-fontawesome@latest</code></pre>
            </p>
            <br />
            <p>
              El botón hace un efecto cuando haces hover, y cuando haces click cambia a verde conforme ha ido bien.
            </p>
            <h3>interactive-1</h3>
            <InteractiveButton1 />
          </div>
        </Collapse>
      </div>      
    </div>
  );
}

export default App;
