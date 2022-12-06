// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBfcHaz9Bkc4N8cZrzxTCnwpy9ZjTOY3uU",
    authDomain: "testpro-8f08c.firebaseapp.com",
    databaseURL: "https://testpro-8f08c.firebaseio.com",
    projectId: "testpro-8f08c",
    storageBucket: "testpro-8f08c.appspot.com",
    messagingSenderId: "253140486405",
    appId: "1:253140486405:web:b395f65a792243747c4f6c",
    measurementId: "G-B2VP9G0ENS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
getAnalytics(app);

const db = getFirestore(app);

export { db }