import React, { useState } from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';
import './sign-up.styles.scss';

const SignUp = () => {
  const [userDetails, setUserDetails] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleSubmit = async (event) => {
    const { displayName, email, password, confirmPassword } = userDetails;
    event.preventDefault();
    console.log(userDetails);
    if (password !== confirmPassword) {
      alert('Passwords font match');
      return;
    }
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        userDetails.email,
        userDetails.password
      );
      await createUserProfileDocument(user, { displayName });
      setUserDetails({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: '',
      });
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log(userDetails);
    setUserDetails({ ...userDetails, [name]: value });
    console.log(userDetails);
  };

  return (
    <div className="sign-up">
      <h2 className="title"> I do not have an account</h2>
      <span>Sign up with your email and password</span>
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="displayName"
          label="Display Name"
          value={userDetails.displayName}
          onChange={handleChange}
          required
        />
        <FormInput
          type="email"
          name="email"
          label="Email"
          value={userDetails.email}
          onChange={handleChange}
          required
        />
        <FormInput
          type="password"
          name="password"
          label="Pasword"
          value={userDetails.password}
          onChange={handleChange}
          required
        />
        <FormInput
          type="password"
          name="confirmPassword"
          label="Confirm Password"
          value={userDetails.confirmPassword}
          onChange={handleChange}
          required
        />
        <CustomButton type="submit">Sign Up</CustomButton>
      </form>
    </div>
  );
};

export default SignUp;
