// navbar
import {
  StyledDashboardNavbarContainer,
  StyledDashboardRouteBtn,
} from './StyledDashboardNavbar';
// router
import { useNavigate } from 'react-router';
// icons
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import BarChartIcon from '@mui/icons-material/BarChart';

export const DashboardNavbar = () => {
  const navigate = useNavigate();

  return (
    <StyledDashboardNavbarContainer>
      <StyledDashboardRouteBtn
        onClick={() => navigate('/dashboard')}
        variant="text"
        startIcon={<BarChartIcon />}
      >
        dashboard
      </StyledDashboardRouteBtn>
      <StyledDashboardRouteBtn
        onClick={() => navigate('/dashboard/exercisesManagement')}
        variant="text"
        startIcon={<FitnessCenterIcon />}
      >
        exercises
      </StyledDashboardRouteBtn>
    </StyledDashboardNavbarContainer>
  );
};
