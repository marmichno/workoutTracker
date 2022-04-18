// styled
import styled from "styled-components";
// mui
import { Paper } from "@mui/material";

export const StyledLoginFormContainer = styled(Paper)`
  && {
    width: 30vw;
    height: 80vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2em;
  }
`;

export const StyledLoginImageWrapper = styled("div")`
  && {
    height: 20%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      height: 100%;
    }
  }
`;

export const StyledLoginHeaderWrapper = styled("div")`
  && {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 3em;

    h2 {
      letter-spacing: 0.1em;
    }
  }
`;

export const StyledLoginFormWrapper = styled("div")`
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

    button {
      margin-top: 2em;
      width: 100%;
    }
  }
`;

export const StyledLoginFormInputWrapper = styled("div")`
  width: 100%;
  padding-bottom: 0.7em;
  padding-top: 0.7em;
`;

export const StyledLoginCaptionWrapper = styled("div")`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1em;

  p {
    letter-spacing: 0.1em;
  }
`;
