import React from 'react';
import { AuthContext } from '../Context/AuthContext/AuthContext';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router';
import Loader from '../Loader/Loader';

const PrivateRoute = ({ children }) => {
    const { user } = useContext(AuthContext);
    const location = useLocation();

    // if (loader) {
    //     return <Loader></Loader>
    // }
    if (user) {
        return children;
    }
    return <Navigate to="/login" state={{ from: location }} replace />;;
};

export default PrivateRoute;