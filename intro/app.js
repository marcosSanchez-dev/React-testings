//ReactDOM.render(<h2>Adios mundo</h2>, document.getElementById("root"));
/*
ReactDOM.render(
  <ul>
    <li>Uno</li>
    <li>Dos</li>
  </ul>,
  document.getElementById("root")
);
*/

/*
// *** COMPOSABLE ***

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Navbar
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="#">
              Home <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Link
            </a>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Dropdown
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <a className="dropdown-item" href="#">
                Action
              </a>
              <a className="dropdown-item" href="#">
                Another action
              </a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" href="#">
                Something else here
              </a>
            </div>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled" href="#">
              Disabled
            </a>
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button
            className="btn btn-outline-success my-2 my-sm-0"
            type="submit"
          >
            Search
          </button>
        </form>
      </div>
    </nav>
  );
}

function MainContent() {
  return <h1>Estoy aprendiendo React</h1>;
}

ReactDOM.render(
  <div>
    <Navbar />
    <MainContent />
  </div>,
  document.getElementById("root")
);
*/

/*
// **** Declarative ****

const elementTest = document.createElement("h1");
elementTest.classList.add("header");
elementTest.textContent = "Hola soy un header";
document.getElementById("root").appendChild(elementTest);

// ReactDOM.render(
//   <h1 className="header">Hola soy un HEADER</h1>,
//   document.getElementById("root")
// );

console.log(elementTest);

const elementReact = <h1 className="header2">Hola soy un header</h1>; //esto es un objeto
console.log(elementReact);
*/

/*
// *** JSX *** 
const jsxElement = (
  <div>
    <h1>Soy un titulo hijo</h1>
    <p>Soy un parrafo hijo</p>
  </div>
);

console.log(jsxElement);

ReactDOM.render(jsxElement, document.getElementById("root"));
*/

/*
// ** JSX CHALLENGE **

const navBar = (
  <nav>
    <h1>Illumninu</h1>
    <ul>
      <li>
        <a href="#">Precio</a>
      </li>
      <li>
        <a href="#">About</a>
      </li>
      <li>
        <a href="#">Contacto</a>
      </li>
    </ul>
  </nav>
);

ReactDOM.render(navBar, document.getElementById("root"));
*/
