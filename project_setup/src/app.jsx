import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Info from "./components/info";
import About from "./components/about";
import Intereses from "./components/intereses";
import Footer from "./components/footer";

function BodyContent() {
    return(
        <main>
            <section className="content--container">
                <Info/>
                <About/>
                <Intereses/>
                <Footer/>
            </section>
        </main>
    )
}

ReactDOM.render(<BodyContent/>, document.getElementById('root'));