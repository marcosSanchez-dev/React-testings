import profileImage from "./imagenes/profile.png"
import mailLogo from "./imagenes/Mail.png"
import linkedinLogo from "./imagenes/linkedin.png"

export default function(){
    return(
        <section className="info--container">
            <img src={profileImage} width="100%" alt="foto de perfil"/>
            <h2>Marcos Sánchez</h2>
            <h4>Frontend Developer</h4>
            <p>marcos.sanchez@saei.mx</p>
            <div className="button--container">
                <button id="email--button" type="submit"><img src={mailLogo} alt="mail incon"/> Email</button>
                <button id="linkedin--button" type="submit"><img src={linkedinLogo} alt="linkedin icon"/> LinkedIn</button>
            </div>
        </section>
    )
}