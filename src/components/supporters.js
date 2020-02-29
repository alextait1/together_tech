import React, {useEffect} from 'react';

export const Supporters = ()=>{
    useEffect(()=>{
        document.title="supporters"
    })
    return (
        <section className="partners">
            <h2>Partners for April 26th Event</h2>
            <ul>
            <div className="juno-container">
                <h3>Juno College of Technology</h3>
                <p>We'd like to extend a big thank you to Juno for donating the space for our first event! For more information about their programs check out <a href="www.junocollege.com">their website</a></p>
            </div>
            <div className="clc-container">
                <h3>Canada Learning Code & Code Mobile Team</h3>
                <p>We couldn't be more excited to have the Code Mobile team from Canada Learning Code coming to our first event to run tech stations for the kiddos! To learn more about their programs check out <a href="https://www.canadalearningcode.ca/">their website</a></p>
            </div>
            </ul>
            <h2>Together Tech Sponsors</h2>
            <div className="sponsors-container">
                <p>To make a donation please visit our <a href="https://www.gofsundme.com/f/together-tech/donate">go fund me page.</a> Companies who contribute $200+ will be thanked on social media and listed as event sponsors here!</p>
            </div>
        </section>
    )
}