import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyBGHO4MMXAejtnJmDd3nhOULC1suEDoOKo",
  authDomain: "crwn-db-96568.firebaseapp.com",
  databaseURL: "https://crwn-db-96568.firebaseio.com",
  projectId: "crwn-db-96568",
  storageBucket: "crwn-db-96568.appspot.com",
  messagingSenderId: "569564829165",
  appId: "1:569564829165:web:572967dea466e1f643c3e4",
  measurementId: "G-QN50FPS4L9"
}

firebase.initializeApp(config)

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};


export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
