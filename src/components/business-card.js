import React from 'react';

export const BusinessCard = (props) => {
    return (
    <div className="business-card">
        <div className="business-card-header">
            <h3>{props.name}</h3>
            <img className="business-card-image"alt={props.alt} src={props.src}/>    
        </div>
        <div className="business-card-body">
            <div className="goods-container">
                <h4>Goods/Services: </h4>
                <p>{props.goods}</p>
            </div>
            <a className="website-link" href={props.href}>Visit Website</a>
            <div className="pickup-delivery">
                <h4 className="mr-20">Delivery? {props.delivery ? 'Yes' : 'No' }</h4>
                <h4>Pick up? {props.pickup ? 'Yes' : 'No' }</h4>
            </div>
            <p>{props.details}</p>
            <div className="neighbourhood-container">
                <h4>Neighbourhood: </h4>
                <p>{props.neighbourhood}</p>
            </div>
        </div>        
    </div>
    )
}