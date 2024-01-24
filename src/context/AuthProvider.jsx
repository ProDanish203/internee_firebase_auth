import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../config/firebase";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
} from "firebase/auth";
  

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const [currentUser, setCurrentUser] = useState();
    const [loading, setLoading] = useState(true);

    function signup(email, pass) {
        return createUserWithEmailAndPassword(auth, email, pass);
    }   

    function login(email, pass) {
        return signInWithEmailAndPassword(auth, email, pass);
    }

    function logout() {
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
          setCurrentUser(user);
          setLoading(false);
        });
    
        return unsubscribe;
      }, []);
    
    const value = {
        currentUser,
        signup,
        login,
        logout,
    };

    return (
        <AuthContext.Provider
        value={value}
        >
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext);
