import React, { useState } from 'react';
import { Collapse } from 'react-collapse';
import './App.css';

// Importamos los ejemplos de ReactiveButton
import ReactiveButton1 from './components/reactive-button-examples/reactive-button-1';
import ReactiveButton2 from './components/reactive-button-examples/reactive-button-2';
import ReactiveButton3 from './components/reactive-button-examples/reactive-button-3';
import ReactiveButton4 from './components/reactive-button-examples/reactive-button-4';
import ReactiveButton5 from './components/reactive-button-examples/reactive-button-5';
import ReactiveButton6 from './components/reactive-button-examples/reactive-button-6';

function App() {
  const [isReactiveButtonOpen, setReactiveButtonOpen] = useState(false);

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

            <h3>Ejemplo 1</h3>
            <ReactiveButton1 />
            <h3>Ejemplo 2</h3>
            <ReactiveButton2 />
            <h3>Ejemplo 3</h3>
            <ReactiveButton3 />
            <h3>Ejemplo 4</h3>
            <ReactiveButton4 />
            <h3>Ejemplo 5</h3>
            <ReactiveButton5 />
            <h3>Ejemplo 6</h3>
            <ReactiveButton6 />
          </div>
        </Collapse>
      </div>
    </div>
  );
}

export default App;
