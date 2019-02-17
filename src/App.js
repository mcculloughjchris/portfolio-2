import React, { Component } from 'react';
import './styles/main.scss';
import anime from 'animejs'
import Stripe from './Sripe';

class App extends Component {
  componentDidMount () {
    anime({
      targets: '.stripe',
      translateY: ['-100vh', 0],
      delay: anime.stagger(200),
      duration: 10000
    })
  }
  
  render() {
    return (
      <div className="stripes">
        <Stripe color="orange" top="I am a web developer" bottom="I am a dad" />
        <Stripe color="red" top="I am a juggalo" bottom="I vape" />
        <Stripe color="pink" top="I can ride a scooter" bottom="I had dreadlocks" />
        <Stripe color="purple" top="I wash dishes by hand" bottom="Sometimes I beer" />
        <Stripe color="blue" top="I forget security questions" bottom="I own 3 cats" />
      </div>
    );
  }
}

export default App;
