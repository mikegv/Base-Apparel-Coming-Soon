import React from 'react';
import { useState } from 'react';
import IconArrow from '../../icon-arrow.svg'
import './SignUp.css'

const SignUp = () => {
    
    const [emailError, setEmailError] = useState(false);

    const check = (e) => {
        e.preventDefault();
        setEmailError(!emailError);
    }
    
    return (
        <div>
            <form onSubmit={check}>
                <input type="text" className={emailError ? "notice" : ""} placeholder='Email Address' />
                <button type="submit"><img src={IconArrow} alt="arrowicon" /></button>
            </form>
            <div class={emailError ? "error showError" : "error"} >Error</div>
        </div>
    );
};

export default SignUp;