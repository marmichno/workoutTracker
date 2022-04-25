import styled from 'styled-components';
import { Paper, Button } from '@mui/material';

export const StyledDashboardNavbarContainer = styled(Paper)`
  && {
    width: 20vw;
    height: 100vh;
    background-color: #b9ffb9;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const StyledDashboardRouteBtn = styled(Button)`
  && {
    display: flex;
    justify-content: flex-start;
    width: 100%;
    height: 7%;
    font-size: 1.5em;

    svg {
      font-size: 40px;
    }
  }
`;
