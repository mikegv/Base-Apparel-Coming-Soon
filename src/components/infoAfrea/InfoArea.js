import React from 'react';
import Content from '../content/Content';
import SignUp from '../signUp/SignUp';
import './InfoArea.css'

const InfoArea = () => {
    return (
        <div className="infocontainer" >
            <Content />
            <SignUp />
        </div>
    );
};

export default InfoArea;