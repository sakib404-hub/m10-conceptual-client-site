import React from 'react';
import { AuthContext } from '../AuthContext/AuthContext';

const AuthProvider = ({ children }) => {
    const user = {
        name: 'Shakib Hossen!',
        email: 'sakib230@gmail.com'
    }
    const authInfo = {
        user
    };

    return (
        <AuthContext value={authInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;
