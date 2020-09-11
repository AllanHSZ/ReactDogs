import React from 'react';
import { UserContext } from '../../UserContext';
import { Route, Navigate } from 'react-router-dom';

const ProtectedRoute = (props) => {
  const { login } = React.useContext(UserContext);

  if (login === true) return <Route {...props} />;
  if (login === false) return <Navigate to="/login" />;
  return null;
};

export default ProtectedRoute;
