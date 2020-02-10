import React from "react";
const Card = (props) => {
    return (
    <div className="card">
        <a href={props.href}>
            <div className="image-container">
                <img 
                    className="card-image" 
                    src={props.src} 
                    alt={props.alt}
                />
                <p className="card-text">{props.cardText}</p>
            </div>
        </a>
    </div>)
}

export default Card;