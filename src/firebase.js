// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyD6tG40xEdzUWdSqG2ryp1QNJIHVpvfn6s",
    authDomain: "slack-clone-31772.firebaseapp.com",
    projectId: "slack-clone-31772",
    storageBucket: "slack-clone-31772.appspot.com",
    messagingSenderId: "148680806488",
    appId: "1:148680806488:web:1510297ead4c1a4fb97a2d",
    measurementId: "G-2KQV976J2D"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;