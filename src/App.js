import React, { useEffect, useState, useContext, UserProvider } from 'react';
import {Route, useHistory} from 'react-router-dom';

import './App.css';
import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import Articles from './pages/articles/articles.component';
import City from './pages/city/city.component';
import Contact from './pages/contact/contact.component';
import Profile from './pages/profile/profile.component';
import NewToCity from './pages/new-to-city/new-to-city.component';
import Subscribe from './pages/subscribe/subscribe.component';
import Smart from './pages/smart/smart.component';
import Authentication from './pages/authentication/authentication.component'
import {auth, onAuthStateChange, createUserProfileDocument} from './firebase/firebase.utils';
import { UserContext } from './context/user-context/user-context';



function App() {
  const user = useContext(UserContext);
  let history = useHistory();
  const setUser = (authInfo)=> {
    createUserProfileDocument(authInfo.userDetails);
    console.log("Set User Info", authInfo);
    user.setLoggedInStatus(authInfo.loggedInStatus);
    console.log('userDetails',authInfo.userDetails);
    user.setUserDetails(authInfo.userDetails);

  }
  useEffect(() => {

    const unsubscribe = auth.onAuthStateChanged(async userAuth => {
      if(userAuth) {
        console.log("UA1",userAuth);
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapshot => {
          console.log(snapshot);
          setUser({loggedInStatus:true, userDetails:{id:snapshot.id,...snapshot.data()}})
          console.log("User Logged In ",user);
          history.push("/profile");

        })
        console.log('user',user);
      } else {
        setUser({loggedInStatus:false, userDetails : null})
      }
      user.setUserDetails(userAuth);
    })
    
    return () => {
      unsubscribe();
    }
  },[]);
  return (
    <div>
        <Header />
      
      <Route exact path='/' component={HomePage}/>
      <Route exact path='/articles' component={Articles}/>
      <Route exact path='/city' component={City}/>
      <Route exact path='/contact' component={Contact}/>
      <Route exact path='/signin' component={Authentication}/>
      <Route exact path='/profile' component= {Profile}/>
      <Route exact path='/newtocity' component= {NewToCity}/>
      <Route exact path='/subscribe' component= {Subscribe}/>
      <Route exact path='/smart' component= {Smart}/>
    </div>
  );
}

export default App;
