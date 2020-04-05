import React from 'react';

export const BusinessCard = (props) => {
    return (
    <div className="business-card">
        <a href={props.href}>
            <div className="business-card-header">
                <h3 className="business-name">{props.name}</h3>
                <a className="website-link" href={props.href}>Visit Website</a>
                <img className="business-card-image"alt={props.alt} src={props.src}/>    
            </div>
            <div className="business-card-body">
                <div className="goods-container">
                    <h4>Goods/Services: </h4>
                    <p>{props.goods}</p>
                </div>
                <div className="pickup-delivery">
                    <h4 className="mr-20">Delivery? {props.delivery ? <span className="yes">Yes</span> : <span className="no">No</span> }</h4>
                    <h4>Pick up? {props.pickup ? <span className="yes">Yes</span> : <span className="no">No</span> }</h4>
                </div>
                <p>{props.details}</p>
                <div className="neighbourhood-container">
                    <h4>Neighbourhood: </h4>
                    <p>{props.neighbourhood}</p>
                </div>
            </div> 
        </a>       
    </div>
    )
}