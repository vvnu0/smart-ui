import firebase from 'firebase/app';
require ("firebase/auth");
require ("firebase/firestore");

const config = {
    apiKey: "AIzaSyCxA_YK09iNhT1GNY3Qs7D23VztC88IDtY",
    authDomain: "citysmart-5bfa4.firebaseapp.com",
    projectId: "citysmart-5bfa4",
    storageBucket: "citysmart-5bfa4.appspot.com",
    messagingSenderId: "27759107695",
    appId: "1:27759107695:web:c14d88f62663877e11b79a"
  };


  firebase.initializeApp(config);

  export const createUserProfileDocument = async(userAuth, addditionalData) => {
    if(userAuth) {
      console.log('UA2', userAuth);

      const userRef = firestore.doc(`users/${userAuth.uid}`);

      const snapShot = await userRef.get();
      console.log('SnapShotExists?', snapShot.exists);
      if(!snapShot.exists) {
        console.log('UA3', userAuth);
        const {displayName, email} = userAuth;
        const createdAt = new Date();
        console.log("Ss",snapShot);
        console.log(displayName,email,createdAt);
        try {
          await userRef.set ({
            displayName,
            email,
            createdAt,
            ...addditionalData
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
        
        callback({loggedInStatus:true, userDetails:user})
      } else {
        callback({loggedInStatus:false, userDetails : null})
      }
    })
  }

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();
  
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters ({prompt:"select_account"});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;
