import React from 'react';

import SignUpForm from './SignUpForm';

import signup from '../images/signup.jpg';

const SignUp = () => {
    return (
        <>
            <div className="container">
                <img src={signup} alt="Sign Up" width="100%"/>
            </div>
            <SignUpForm/>
        </>
    );
}

export default SignUp;
