import { Outlet, Navigate } from 'react-router';
// cookie
import { getSessionCookie } from '../../../utils/cookies/cookies';

export const ProtectedRoutes = () => {
  const cookie = getSessionCookie();
  return cookie ? <Outlet /> : <Navigate to="/login" replace={true} />;
};
