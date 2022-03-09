import React from 'react';
import IconArrow from '../../icon-arrow.svg'
import './SignUp.css'

const SignUp = () => {
    return (
        <div>
            <form>
                <input type="text" className="signup" placeholder='Email Address' />
                <button><img src={IconArrow} alt="arrowicon" /></button>
            </form>
        </div>
    );
};

export default SignUp;