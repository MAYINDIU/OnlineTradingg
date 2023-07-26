import { AuthContext } from '../Context/AuthProvider';
import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { Spinner } from 'reactstrap';

const privateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return
        <Spinner
            className="m-5"
            color="primary"
        >
            Loading...
        </Spinner>;

    }
    if (!user) {
        return <Navigate to={'/auth/login'} state={{ from: location }} replace></Navigate>
    }

    return children;
};

export default privateRoute;