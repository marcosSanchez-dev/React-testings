import heroImage from "../images/group.png";

export default function Hero() {
    return(
        <section className="hero--container">
            <img src={heroImage} className="hero--image" width="60%" alt="hero image" />
            <div className="hero--text">
                <h1>Online Experiences</h1>
                <p>Join unique interactive activities 
                    led by one-of-a-kind hosts—all without 
                    leaving home.</p>
            </div>
        </section>
        
    )
}