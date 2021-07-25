import React, { useContext, useState, useEffect } from "react";
import { auth } from "../firebase";

const AuthContext = React.createContext();

export const useAuth = () => {
    return useContext(AuthContext);
}

export function AuthProvider({children}) {
    const [currentUser, setCurrentUser] = useState({});

    const signup = (email, password) => auth.createUserWithEmailAndPassword(email, password);

    const login = (email, password) => auth.signInWithEmailAndPassword(email, password);
    
    const passwordReset = email => auth.sendPasswordResetEmail(email);

    const updateProfile = (displayName, photoURL) => auth.currentUser.updateProfile({displayName, photoURL});

    const updateEmail = email => auth.currentUser.updateEmail(email);
    
    const updatePassword = password => auth.currentUser.updatePassword(password);

    const logout = () => auth.signOut();
    
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user);
        });

        return unsubscribe;
    }, []);

    const value = {
        currentUser,
        signup,
        login,
        passwordReset,
        logout,
        updateProfile,
        updateEmail,
        updatePassword,
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
}