import twitter from "./imagenes/Twitter_icon.png";
import facebook from "./imagenes/Facebook_icon.png";
import instagram from "./imagenes/Instagram_icon.png";
import github from "./imagenes/GitHub_icon.png";

export default function () {
    return(
        <footer>
            <img src={twitter} alt="twitter"/>
            <img src={facebook} alt="facebook"/>
            <img src={instagram} alt="instagram"/>
            <img src={github} alt="github"/>
        </footer>
    )
}