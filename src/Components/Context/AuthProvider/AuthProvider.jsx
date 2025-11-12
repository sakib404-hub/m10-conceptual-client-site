import React, { useEffect, useState } from 'react';
import { AuthContext } from '../AuthContext/AuthContext';
import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from '../../../Firebase/firebase.config';

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const signInWithGoogle = () => {
        const googleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleProvider);
    }

    const logOut = () => {
        return signOut(auth);
    }

    //setting up the observer
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUSer) => {
            if (currentUSer) {
                setUser(currentUSer);
            } else {
                setUser(null)
            }
        })
        return () => {
            unSubscribe();
        }
    }, [])


    const authInfo = {
        user,
        setUser,
        signInWithGoogle,
        logOut,
    };

    return (
        <AuthContext value={authInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;
