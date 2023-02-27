// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB8Zrj-aqM_eYYP8b6zEaD0zGhJ6GBLqkY",
    authDomain: "medi-clinic-35ddb.firebaseapp.com",
    projectId: "medi-clinic-35ddb",
    storageBucket: "medi-clinic-35ddb.appspot.com",
    messagingSenderId: "1086376116488",
    appId: "1:1086376116488:web:2bd64f0e6bea30cfdfacbd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth