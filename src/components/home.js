import React, {useEffect} from 'react';

export const Home = () => {
    useEffect(()=>{
        document.title="Together Tech"
    })
    return (
    <div>
        <div className="splash-row-1">
          <section className="heading-container box">
          <div className="logo-container">
            <h1>
              <span className="together">Together</span> 
              <span className="tech">tech</span>
            </h1>
          </div>
          </section>
          <section className="tagline-container box">
            <h2>
              <span className="tagline-one">A meetup for those who</span> can't 
              <span className="tagline-two"> always</span> meet up.
            </h2>
          </section>
        </div>
        <div className="splash-row-2">
          <section className="about-container box">
            {/* <h3>About Together Tech</h3> */}
            <h3>COVID-19 Update</h3>
            <p>Due to the ongoing concern surrounding COVID-19 and the recommnedations to postpone public gatherings, we will be re-scheduling our event for early fall 2020. Stay tuned!</p>
            <p>We'll be keeping the call for proposals link up and accepting rolling submissions.</p>
            {/* <p>Join us for a free Sunday mid-day tech meetup featuring excellent talks, snacks, coffee and free childcare. This event is not specifically <em>for</em> parents, but we're seeking to accomodate folks who can't typically make it out to week night events. We're also a dry event, focused on great content and tasty snacks so everyone feels safe and included.</p>
            <p>
            Kids will also be learning about technology with a code mobile team from <a href="https://www.canadalearningcode.ca/">Canada Learning Code!</a></p>
            <p>
            <strong>Speakers will be announced by late March/early April.</strong> Expect intermediate+ technical talks.
            </p> */}
          </section>
          <section className="details-container box">
            <div className="details">
              <h3>Our first event is postponed!</h3>
                <p><span className="detail">Date:</span> TBD</p>
                {/* <p><span className="detail">Time:</span> 11:00am - 1:00pm</p> */}
                <p><span className="detail">Cost:</span> Free</p>
                <p><span className="detail">Childcare:</span> Free with Canada Learning Code running tech stations!</p>
            </div>
            {/* <div className="tickets-container">
              <a href="https://www.eventbrite.com/e/together-tech-a-meetup-for-those-who-cant-always-meet-up-tickets-90389279769">Tickets</a>
            </div> */}
          </section>
        </div>
    </div>
    )
};