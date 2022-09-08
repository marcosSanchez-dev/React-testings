import starIcon from "../images/star_icon.png";
import profile_1 from "../images/profile1.png";

export default function Card({img,rating,reviewCount,country,title,price}) {
    return(
        <div className="card">
            <img src={img} className="card--image" />
            <div className="card--stats">
                <img src={starIcon} className="card--star" />
                <span>{rating}</span>
                <span className="gray">({reviewCount}) • </span>
                <span className="gray">{country}</span>
            </div>
            <p>{title}</p>
            <p><span className="bold">From ${price}</span> / person</p>
        </div>
    )
}