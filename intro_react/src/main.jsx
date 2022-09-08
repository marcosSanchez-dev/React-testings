import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Header from "./components/Header"
import MainContent from "./components/MainContent"
import Footer from "./components/Footer"

/*
// ** Sample page excercise ** 
const samplePage = (
  <div>
    <h1>Soy el titulo</h1>
    <section>
      <p>soy el body dentro de una seccion</p>
    </section>
    <footer>soy el footer</footer>
  </div>
)

console.log(samplePage);
//document.getElementById("root").append(JSON.stringify(samplePage)); // Retorna JSX

ReactDOM.render(samplePage, document.getElementById("root"));
*/

/*

//Project 1

const funFacts = (
  <div>
    <img className='logo' src={reactLogo} alt="react logo" width="10%"/>
    <h1>Fun Facts About React</h1>
    <ul>
      <li>Lorem ipsum dolor sit amet  optio architecto </li>
      <li>  illo perferendis alias fuga quaerat numquam esse.</li>
      <li>consectetur adipisicing elit. Unde laboriosam eligendi</li>
      <li>inventore repudiandae maiores, tenetur enim </li>
      <li>nobis dolores, adipisci,</li>
    </ul>
  </div>
)

ReactDOM.render(funFacts, document.getElementById("root"));
*/

// *** my own component excersice ***

function PrimerComponente() {
    return(
      <div>
        <Header />
        <MainContent/>
        <Footer/>
      </div>
    )
}

ReactDOM.render(<PrimerComponente/>, document.getElementById("root"));