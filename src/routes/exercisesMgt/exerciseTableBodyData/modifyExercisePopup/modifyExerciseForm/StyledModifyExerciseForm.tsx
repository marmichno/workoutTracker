import styled from 'styled-components';
import { Paper } from '@mui/material';
import { Grid } from '@mui/material';

export const StyledModifyExerciseFormContainer = styled(Paper)`
  && {
    width: 30%;
    height: 60%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
`;

export const StyledModifyExerciseCloseWrapper = styled(Grid)`
  && {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    svg {
      cursor: pointer;
      font-size: 50px;
      margin-right: 5px;
      margin-top: 5px;
    }
  }
`;

export const StyledModifyExerciseFormWrapper = styled(Grid)`
  && {
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
`;

export const StyledModifyExerciseHeaderWrapper = styled(Grid)`
  && {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const StyledModifyExerciseInputWrapper = styled(Grid)`
  && {
    width: 100%;
    padding-bottom: 0.7em;
    padding-top: 0.7em;
  }
`;

export const StyledModifyFormWrapper = styled(Grid)`
  && {
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    form {
      width: 80%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
    }

    button {
      margin-top: 2em;
      width: 100%;
    }
  }
`;
