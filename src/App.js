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
import Testing from './pages/testing/testing.component';
import Forum from './pages/forum/forum.component';
import Authentication from './pages/authentication/authentication.component'
import {auth, onAuthStateChange, createUserProfileDocument, getResident} from './firebase/firebase.utils';
import { UserContext } from './context/user-context/user-context';
import axios from 'axios';


function App() {
  const user = useContext(UserContext);
  let history = useHistory();
  const setUser = (authInfo)=> {
    console.log("Before setting user ", user);
    createUserProfileDocument(authInfo.userDetails);
    console.log("Set User Info from", authInfo);
    user.setLoggedInStatus(authInfo.loggedInStatus);
    console.log('userDetails',authInfo.userDetails);
    user.setUserDetails(authInfo.userDetails);
    console.log("After setting user ", user);

  }
  useEffect(() => {

    const unsubscribe = auth.onAuthStateChanged(async userAuth => {
      if(userAuth) {
        console.log("UA1",userAuth);
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapshot => {
          console.log("Snapshopt is ", snapshot);
          console.log("Getting resident data from storage ", snapshot.id);
          setUser({loggedInStatus:true, userDetails:{id:snapshot.id,...snapshot.data()}})
          axios.get('http://localhost:8080/resident/'+snapshot.id)
            .then(function (response) {
                console.log("Setting resident data ", response);
                user.setResidentDetail(response.data);
                history.push("/profile");
            }).catch(function (error) {
              // handle error
              console.log(error);
            })
            .then(function () {
              // always executed
            });
          console.log("User context set, current state ", user);
          
        })
        console.log('user',user);
      } else {
        setUser({loggedInStatus:false, userDetails : null, residentDetail: null})
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
      <Route exact path='/forum' component= {Forum}/>
      <Route exact path='/testing' component= {Testing}/>
    </div>
  );
}

export default App;
