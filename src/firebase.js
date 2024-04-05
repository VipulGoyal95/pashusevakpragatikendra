// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAZJLO9BvN5WjNy9YNPkJpMO8W6OA-Mgls",
  authDomain: "static-website-ab5b8.firebaseapp.com",
  projectId: "static-website-ab5b8",
  storageBucket: "static-website-ab5b8.appspot.com",
  messagingSenderId: "154746564013",
  appId: "1:154746564013:web:dfdaac2940828c90af0524",
  measurementId: "G-DXMG6K1HTS",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
