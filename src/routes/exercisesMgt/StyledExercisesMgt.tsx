import styled from 'styled-components';
import { Grid, TableContainer, Table } from '@mui/material';

export const StyledExercisesMgtContainer = styled(Grid)`
  && {
    width: 80vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
  }
`;

export const StyledExerciseTableContainer = styled(TableContainer)`
  && {
    height: 80%;
    width: 100%;
    margin-top: 10px;
    background-blend-mode: saturation;
    background-position: top;
    background-repeat: no-repeat;
    background-size: 45%;
    /* Hide scrollbar for IE, Edge and Firefox */
    &::-webkit-scrollbar {
      display: none;
    }
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
    @media (max-width: 1350px) {
      background-position: bottom;
      background-size: contain;
    }
    @media (max-width: 930px) {
      &::-webkit-scrollbar {
        display: initial;
        width: 8px;
        height: 8px;
      }
      scrollbar-width: thin; /* Firefox */
      /* Track */
      &::-webkit-scrollbar-track {
        background: transparent;
      }
      /* Handle */
      &::-webkit-scrollbar-thumb {
        background: #196a6d;
      }
      /* Handle on hover */
      &::-webkit-scrollbar-thumb:hover {
        background: #2bbbbf;
      }
    }
    @media (max-width: 900px) {
      height: 60%;
      margin-top: 0;
    }
  }
`;

export const StyledExerciseTable = styled(Table)`
  && {
    border-collapse: separate;
    border-spacing: 0px 25px;
  }
`;
