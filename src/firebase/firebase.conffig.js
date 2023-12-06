// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAOtPVCHHSkCjoTNGO_VrdlCfXMlEGHGFE",
  authDomain: "the-dargon-news-client.firebaseapp.com",
  projectId: "the-dargon-news-client",
  storageBucket: "the-dargon-news-client.appspot.com",
  messagingSenderId: "335238483615",
  appId: "1:335238483615:web:e183a1eb60aaf69f605caa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;