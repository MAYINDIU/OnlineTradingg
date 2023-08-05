
import app from '../Firebase/firebase.config';
import { getAuth, onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';

export const AuthContext = createContext()
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState('');
    const [loading, setLoading] = useState(true);
    const userId = window.localStorage.getItem('userInfo')

    useEffect(() => {
        const url = `https://indian.munihaelectronics.com/public/api/SingleUser/${userId}`;
        console.log(url);
        fetch(url)
            .then((res) => res.json())
            .then((data) => setUser(data));
    }, [userId]);

    console.log(user)

    const providerLogin = (provider) => {
        setLoading(true);
        return signInWithPopup(auth, provider);
    }

    const logOut = () => {
        setLoading(true);
        window.localStorage.removeItem('user-loggedIn')
        window.localStorage.removeItem('admin-loggedIn')
        window.localStorage.removeItem('userInfo')
        return signOut(auth);
    }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });
        return () => {
            unsubscribe();
        }
    }, [])

    const authInfo = { user, loading, setUser, logOut, providerLogin }

    return (
        <AuthContext.Provider value={authInfo} >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;