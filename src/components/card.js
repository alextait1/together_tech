import React from "react";
// import Fragment from "react";
const Card = (props) => {
    return (
    <div>
        <a href={props.href}>
            <div className="image-container">
                <img src={props.src} alt={props.alt}/>
    <p>{props.cardText}</p>
            </div>
            <div className="link-container">
    <a href={props.href}>{props.linkText}</a>
            </div>
        </a>
    </div>)
}

export default Card;