import catImage from "./images/cat.jpg";
import mailIcon from "./images/Mail.png";

export default function Contact({img,name,phone,mail}) {
    return (
        <div className="contacts">
            <div className="contact-card">
                <img src={img} width="10%"/>
                <h3>{name}</h3>
                <div className="info-group">
                    <img src={mailIcon} />
                    <p>{phone}</p>
                </div>
                {mail && <div className="info-group">
                    <img src={mailIcon} />
                    <p>{mail}</p>
                </div>}
            </div>
        </div>
    )
}