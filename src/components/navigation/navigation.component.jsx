import React, { useContext } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils';
import './navigation.style.scss';
import { UserContext } from '../../context/user-context/user-context';

const LoggedInNavigation = () => {
  return (
    <ul className="navigation-items">
      <li className="navigation-item">
        <Link to="/profile"> Profile</Link>
      </li>
      <li className="navigation-item">
        <Link to="/subscribe"> Subscribe</Link>
      </li>
      <li className="navigation-item">
        <Link to="/newtocity"> New to City</Link>
      </li>
      <li className="navigation-item">
        <Link to="/smart"> Smart</Link>
      </li>
      <li className="navigation-item">
        <Link to="" onClick={() => auth.signOut()}>
          Sign Out
        </Link>
      </li>
    </ul>
  );
};

const GeneralNavigation = () => {
  return (
    <ul className="navigation-items">
      <li className="navigation-item">
        <Link to="/"> Home</Link>
      </li>
      <li className="navigation-item">
        <Link to="/city"> City</Link>
      </li>
      <li className="navigation-item">
        <Link to="/articles"> Articles</Link>
      </li>
      <li className="navigation-item">
        <Link to="/contact"> Contact</Link>
      </li>
      <li className="navigation-item">
        <Link to="/signin"> Sign In</Link>
      </li>
    </ul>
  );
};
const Navigation = () => {
  const user = useContext(UserContext);

  const signOut = () => {
    console.log('Sign Out');
    auth.signOut();
  };

  return (
    <div className="navigation">
      <ul className="navigation-items">
        {user.loggedInStatus ? <LoggedInNavigation /> : <GeneralNavigation />}
      </ul>
    </div>
  );
};

export default Navigation;
