import { Grid, Paper } from '@mui/material';
import styled from 'styled-components';

export const StyledDeleteExercisePopupContainer = styled(Grid)`
  && {
    width: 100vw;
    height: 100vh;
    position: absolute;
    z-index: 999;
    display: flex;
    align-items: center;
    justify-content: center;
    left: 0;
    top: 0;
  }
`;

export const StyledDeleteExercisePopupWrapper = styled(Paper)`
  && {
    width: 40%;
    height: 30%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;

    h4 {
      max-width: 80%;
    }
  }
`;

export const StyledDeleteExerciseButtonWrapper = styled(Grid)`
  && {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    button {
      margin: 2em;
      width: 150px;
    }
  }
`;
