import React from 'react';
import {Route, Redirect} from 'react-router-dom';

const PrivateRoute= ({component: Component, ...rest}) => {
    return (
        <Route {...rest} render={() => {
            if (localStorage.getItem("token")) {
                return <Component />;
            } else {
                return <Redirect to="/login" />; //might need to change the redirect link
            }
            }}
        />
    )
}
export default PrivateRoute;