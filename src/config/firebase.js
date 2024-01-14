// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBdZ6qViWW7waek-PQIDvVhZVK6zU7uXfk",
    authDomain: "olx-project-aece2.firebaseapp.com",
    projectId: "olx-project-aece2",
    storageBucket: "olx-project-aece2.appspot.com",
    messagingSenderId: "357606776999",
    appId: "1:357606776999:web:fa1bce1639e3f07c607b82",
    measurementId: "G-0DGHZCKFL8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export function register(userInfo) {
    const { fullname, age, email, password } = userInfo
    const auth = getAuth(app);
    createUserWithEmailAndPassword(auth, fullname, age, email, password)
        .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            // ...
            alert ("Succesfully Registered")
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
            alert (errorMessage)
        });
}


export function login(userInfo) {
    const { email, password } = userInfo

    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            // ...
            alert("Sucessfully Login")
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert (errorMessage)
        });
}