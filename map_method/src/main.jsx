import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import jokesData from "./components/jokesData";
import Joke from "./components/Joke";

const nums = [1, 2, 3, 4, 5];

const powNum = nums.map((element) => Math.pow(element, 2));

console.log(powNum);

const names = ["marcos", "alejandra", "yolanda", "amor", "epi"];

const capitalizedNames = names.map(
  (name) => name[0].toUpperCase() + name.slice(1)
);

console.log(capitalizedNames);

const powerRangers = ["Rojo", "Azul", "Amarillo", "Blanco"];

const pPowerRangers = powerRangers.map((element) => `<p>${element}</p>`);
console.log(pPowerRangers);

/* Jsx iteration */
/*
const colors = [<h3>red</h3>, <h3>gren</h3>, <h3>blue</h3>];

function App() {
  return <main>{colors}</main>;
}

ReactDOM.render(<App />, document.getElementById("root"));
*/

function App() {
  const jokeElements = jokesData.map((element) => (
    <Joke setup={element.setup} punchline={element.punchline} />
  ));
  return <div>{jokeElements}</div>;
}

ReactDOM.render(<App />, document.getElementById("root"));
