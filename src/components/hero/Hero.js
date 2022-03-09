import React from 'react';
import HeroImage from '../../hero-desktop.jpg'
import './Hero.css'

function Hero() {
    return (
        <div>
            <img src={HeroImage} height="700"/>
        </div>
    );
}

export default Hero;