import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyBlNUFBZiIF25XRf5pQ4pVpzzdYD119Gvk",
  authDomain: "crwn-db-7f090.firebaseapp.com",
  databaseURL: "https://crwn-db-7f090.firebaseio.com",
  projectId: "crwn-db-7f090",
  storageBucket: "crwn-db-7f090.appspot.com",
  messagingSenderId: "898067960240",
  appId: "1:898067960240:web:b23b4a635f93403f838675",
  measurementId: "G-0EL7199T40"
};

firebase.initializeApp(config);

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
