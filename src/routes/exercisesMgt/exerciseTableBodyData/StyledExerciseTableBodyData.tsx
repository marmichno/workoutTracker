import styled from 'styled-components';
// mui components
import { TableRow, TableCell, Typography } from '@mui/material';
import { Box } from '@mui/system';
// mui icons

export const StyledExerciseTableRow = styled(TableRow)`
  && {
    height: 115px;
    background-color: white;
    box-shadow: 0px 0px 20px -10px rgba(0, 0, 0, 0.75);
    overflow: scroll;
    @media (max-width: 900px) {
      height: 0;
    }
  }
`;

export const StyledBox = styled(Box)`
  && {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const StyledExerciseTableCell = styled(TableCell)`
  && {
    font-size: 16px;
    text-align: center;

    svg {
      font-size: 40px;
      cursor: pointer;
    }

    svg:hover {
      color: blue;
    }
  }
`;
