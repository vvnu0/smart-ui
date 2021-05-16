import React from 'react';
import SignIn from '../../components/signin/signin.component';
import SignUp from '../../components/sign-up/sign-up.component';
import './authentication.styles.scss';
const Auth = () => (
  <div className="authentication">
    <SignIn />
    <SignUp />
  </div>
);

export default Auth;
