import reactLogo from "../react_logo.png"

export default function Header() {
    return(
      <header>
        <nav className="nav-container">
          <img src={reactLogo} alt="logo react" width="20%" className="nav--icon"/>
          <h3 className="nav--logo_text">ReactFacts</h3>
          <h4 className="nav--title">React Course - Project 1</h4>
        </nav>
      </header>
    )
}

