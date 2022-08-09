// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.REACT_APP_apiKey,
    authDomain: process.env.REACT_APP_authDomain,
    projectId: process.env.REACT_APP_projectId,
    storageBucket: process.env.REACT_APP_storageBucket,
    messagingSenderId: process.env.REACT_APP_messagingSenderId,
    appId: process.env.REACT_APP_appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;

REACT_APP_apiKey=AIzaSyC8Y_c-x1mxkuY42I0zhOx7plMQFhgn060,
REACT_APP_authDomain=motorcycle-parts-manufacturer.firebaseapp.com
REACT_APP_projectId=motorcycle-parts-manufacturer,
REACT_APP_storageBucket=motorcycle-parts-manufacturer.appspot.com
REACT_APP_messagingSenderId=672966663909
REACT_APP_appId=1:672966663909:web:8fc547db3467c618b0be0c