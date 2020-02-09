import React, { Fragment } from 'react';
import './App.css';
import Card from "./components/card"

function App() {
  return (
    <Fragment className="App">
      <header className="App-header">
        <h1>Together Tech</h1>
        <h2>A meetup for those who can't always meet up.</h2>
      </header>
      <main>
        {/* <Card text="testing"/> */}
        <Card alt="free tickets on eventbrite" src="assets/transistors.jpg" href="https://www.eventbrite.com/e/together-tech-meetup-tickets-90389279769" cardText="get your free tickets to our first event on April 26th!" linkText="Tickets to meetup" />
        {/* <a href="https://www.eventbrite.com/e/together-tech-meetup-tickets-90389279769">Get Free Tickets</a>
        <a href="#">Apply to CPF</a>
        <a href="#">Sponsor event</a> */}
      </main>
    </Fragment>
  );
}

export default App;
