import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"

const firebaseConfig = {

  apiKey: "AIzaSyDX4zHv8gZOC9N-NKIGn8La6w9WLokcYSg",

  authDomain: "authsystem-314d6.firebaseapp.com",

  projectId: "authsystem-314d6",

  storageBucket: "authsystem-314d6.appspot.com",

  messagingSenderId: "230010972033",

  appId: "1:230010972033:web:486f239bd54b785c04ea80",

  measurementId: "G-K0MYQKD7E4"

};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();