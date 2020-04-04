import React, {useEffect} from 'react';
import data from "../data/data.json";
import { BusinessCard } from './business-card.js';

export const ShopLocal = ()=>{
    useEffect(()=>{
        document.title="Shop Local"
    })

    return(
        <div>
            <header className="shop-local-header">
                <h2 className="shop-local-h2">Local GTA businesses offering delivery and pick up options</h2>
                <a className="submit-business-button" href="https://docs.google.com/forms/d/e/1FAIpQLScGeH3onM3pvqoIZmIsxoZW0oo-FtKUEyDYOpf-IRx340sDhQ/viewform?usp=sf_link">Submit a business</a>
            </header>
            <div className="business-container">
            {data.map((business)=>{
                return (
                    <div className="business-card-container" key={business.id}>
                        <BusinessCard 
                            name={business.name}
                            alt={business.alt}
                            src={require(`../assets/${business.image}`)}
                            href={business.url}
                            goods={business.goods}
                            neighbourhood={business.neighbourhood}
                            details={business.details}
                            pickup={business.pickup}
                            delivery={business.delivery}
                        />
                    </div>
                )
            })}
            </div>
        </div>
    ) 
}