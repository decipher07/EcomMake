import firebase from 'firebase/app';
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyA5Wa_4VSK_ykRfMUIYlTDW5iqb4IG7e6c",
    authDomain: "ecommake-99fe9.firebaseapp.com",
    databaseURL: "https://ecommake-99fe9.firebaseio.com",
    projectId: "ecommake-99fe9",
    storageBucket: "ecommake-99fe9.appspot.com",
    messagingSenderId: "631375967079",
    appId: "1:631375967079:web:30ff37e6577ce79d9275c2",
    measurementId: "G-7KWF9ENMVP"
}

firebase.initializeApp(config)

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;