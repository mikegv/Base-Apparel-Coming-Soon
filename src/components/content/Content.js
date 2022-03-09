import React from 'react';
import Logo from '../../logo2.svg'
import './Content.css'

const Content = () => {
    return (
        <div class="contentContainer">
            <img src={Logo} alt="thelogo" />
            <div className="heading">
                <p className="were">We're</p>
                <p>Coming<br />Soon</p>
            </div>
            <p className="summary">
            Hello fellow shoppers! We're currently building our new fashion store. 
            Add your email below to stay up-to-date with announcements and our launch deals.
            </p>
        </div>
    );
};

export default Content;