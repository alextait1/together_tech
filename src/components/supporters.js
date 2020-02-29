import React, {useEffect} from 'react';

export const Supporters = ()=>{
    useEffect(()=>{
        document.title="supporters"
    })
    return (
        <section className="supporters">
            <h2>Together Tech Sponsors</h2>
            <div className="sponsors-container">
                <p>To make a donation please visit our <a href="https://www.gofundme.com/f/together-tech">go fund me page.</a> Companies who contribute $200+ will be thanked on social media and listed as event sponsors here!</p>
            </div>
            <h2>Partners for April 26th Event</h2>
           
            <div className="juno-container">
                <h3>Juno College of Technology</h3>
                <p>We'd like to extend a big thank you to Juno for donating the space for our first event! For more information about their programs check out <a href="www.junocollege.com" aria-label="Juno College website">their website.</a></p>
            </div>
            <div className="clc-container">
                <h3>Canada Learning Code & Code Mobile Team</h3>
                <p>We couldn't be more excited to have the Code Mobile team from Canada Learning Code coming to our first event to run tech stations for the kiddos! To learn more about their programs check out <a href="https://www.canadalearningcode.ca/" aria-label="Canada Learning Code Website">their website.</a></p>
            </div>
            <div className="logos">
                <img src={require('../assets/juno_logo.svg')} alt="juno college logo" className="juno-logo"/>
                <img src={require('../assets/clc.png')} alt="code mobile logo" className="clc-logo"/>
            </div>
           
        </section>
    )
}