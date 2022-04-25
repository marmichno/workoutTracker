import { Outlet, Navigate } from 'react-router';
// cookie
import { getSessionCookie } from '../../../utils/cookies/cookies';
// components
import { DashboardNavbar } from '../../commonComponents/dashboardNavbar/DashboardNavbar';

export const ProtectedRoutes = () => {
  const cookie = getSessionCookie();
  return cookie.token !== undefined ? (
    <div style={{ display: 'flex', width: '100vw', height: '100vh' }}>
      <DashboardNavbar />
      <Outlet />
    </div>
  ) : (
    <Navigate to="/login" replace={true} />
  );
};
