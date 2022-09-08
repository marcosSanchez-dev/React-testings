import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Card from "./components/card";
import profile1 from "./images/profile1.png";

function App() {
  /*
    const name = "Marcos";
    const lastName = "Sanchez";

    const date = new Date();
    const hour = date.getHours() % 12;
    console.log(hour);
    let timeOfDay;

    if (hour < 0) {
      timeOfDay = "Buenos dias!";
    }else if (hour => 0 && hour <= 7) {
      timeOfDay = "Buenas tardes!";
    }else{
      timeOfDay = "Buenas noches";
    }
*/
  return (
    <div>
      <Navbar />
      <Hero />
      <Card
        img={profile1}
        rating={5.0}
        reviewCount={6}
        country="USA"
        title="Life Lessons with Katie"
        price={136}
      />

      {/*<h1>Hola {name} {lastName} quiero desarte {timeOfDay}</h1>*/}
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
