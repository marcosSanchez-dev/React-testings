import airbnbIcon from "../images/airbnb.png";

export default function Navbar() {
    return(
        <nav>
            <img src={airbnbIcon} className="nav--logo" alt="airbnb icon"/>
        </nav>
    )
}