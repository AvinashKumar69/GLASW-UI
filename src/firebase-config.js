import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyAj0QeIAAW1N_ZrezGZhcnVzHeMfH-UZJc",
    authDomain: "glasw-18bab.firebaseapp.com",
    projectId: "glasw-18bab",
    storageBucket: "glasw-18bab.appspot.com",
    messagingSenderId: "660946695585",
    appId: "1:660946695585:web:cadfe8f117a9a710cb07e0",
    measurementId: "G-81H27BB3LD"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);