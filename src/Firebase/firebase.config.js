// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBfI0cJIBAt9NrK7r9I0NJF-OjeOm-pwcI",
    authDomain: "ka-kbd.firebaseapp.com",
    projectId: "ka-kbd",
    storageBucket: "ka-kbd.appspot.com",
    messagingSenderId: "824555369661",
    appId: "1:824555369661:web:cd9524f7c69149769ef3d4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;