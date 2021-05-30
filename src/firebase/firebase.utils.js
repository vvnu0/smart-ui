import firebase from 'firebase/app';
import axios from 'axios';

require ("firebase/auth");
require ("firebase/firestore");

  const firebaseconfig = {
    apiKey: "AIzaSyD9tNBPTyotFjo-NOXCZ2zyDf610LT8ruI",
    authDomain: "pilot-city-d1130.firebaseapp.com",
    projectId: "pilot-city-d1130",
    storageBucket: "pilot-city-d1130.appspot.com",
    messagingSenderId: "43076847176",
    appId: "1:43076847176:web:e2e940f9c67d3d80467a7d",
    measurementId: "G-TWR0TVSPYM"
  }

  firebase.initializeApp(firebaseconfig);

  export const createResident = async(userData) => {
    return await axios.post('http://localhost:8080/resident/create', 
      {
        userId:userData.userId,
        userName: userData.displayName,
        firstName: userData.displayName,
        lastName: userData.displayName,
        emailAddress: userData.userEmail,
        createdAt: userData.createdAt
      }
    )
  }

  export const createUserProfileDocument = async(userAuth, addditionalData) => {
    if(userAuth) {
      console.log('UA2', userAuth);

      const userRef = firestore.doc(`users/${userAuth.uid}`);

      const snapShot = await userRef.get();
      console.log('SnapShotExists?', snapShot.exists);
      if(!snapShot.exists) {
        console.log('UA3', userAuth);
        console.log('Additional data', addditionalData);
        let {displayName, email} = userAuth;
        const createdAt = new Date();
        console.log("Ss",snapShot);
        console.log("Display email created ", displayName,email,createdAt);
        if (!displayName && addditionalData && addditionalData.displayName) {
          displayName = addditionalData.displayName;
        }
        console.log("New Display email created ", displayName,email,createdAt);
        try {
          await userRef.set ({
            displayName,
            email,
            createdAt,
            ...addditionalData
          });
        } catch (error) {
          console.log('error creating the user', error.message)
        }

        //create a resident
        try {
          await userRef.get();
          userRef.onSnapshot(snapshot => {
            console.log("Creating resident ", snapshot);
            const resident = createResident(
              {userId:snapshot.id,displayName: displayName, userEmail:email, createdAt: createdAt}
            );
          })
        } catch (error) {
          console.log('error creating the user', error.message)
        }
      }
      console.log(snapShot);
      return userRef;
    } else {
      return;
    }
    
  }

  export const onAuthStateChange = (callback)=>{
    
    return firebase.auth().onAuthStateChanged(user => {
      console.log('Auth State changed', user);
      if(user) {
        const resident = axios.post('http://localhost:8080/resident/'+user.id);
        callback({loggedInStatus:true, userDetails:user, residentDetail: resident})
      } else {
        callback({loggedInStatus:false, userDetails : null, residentDetail: null})
      }
    })
  }

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();
  
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters ({prompt:"select_account"});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;
