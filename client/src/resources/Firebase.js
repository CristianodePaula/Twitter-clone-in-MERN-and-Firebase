import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDU3Mqo5wnwXiaGV_jiKK-63jUNJQE187s",
  authDomain: "twitter-5b818.firebaseapp.com",
  projectId: "twitter-5b818",
  storageBucket: "twitter-5b818.appspot.com",
  messagingSenderId: "501354955732",
  appId: "1:501354955732:web:eed662f519481dc7178c41"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const provider = new GoogleAuthProvider();

export default app;