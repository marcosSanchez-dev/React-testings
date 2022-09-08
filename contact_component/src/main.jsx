import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Contact from "./components/Contact";
import cat1 from "./components/images/cat.jpg";
import cat2 from "./components/images/cat2.jpg";
import cat3 from "./components/images/cat3.jpg";
import cat4 from "./components/images/cat4.jpg";

function App() {
  return (
    <main>
      <Contact img={cat1} name="Mr. Whiskerson" phone={445534} />
      <Contact
        img={cat2}
        name="Fluffykins"
        phone="(212) 555-2345"
        mail="fluff@me.com"
      />
      <Contact
        img={cat3}
        name="Felix"
        phone="(212) 555-4567"
        mail="thecat@hotmail.com"
      />

      <Contact
        img={cat4}
        name="Felix"
        phone="(212) 555-4567"
        mail="thecat@hotmail.com"
      />
    </main>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
