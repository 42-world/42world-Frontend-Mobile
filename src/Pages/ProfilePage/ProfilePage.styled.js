import styled from "styled-components";
import { Box, styled as muiStyled } from "@mui/material";

const BackgroundDiv = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  display: flex;
  flex-direction: column;
  background-color: #2a2d38;
  width: 100vw;
  margin: 0px;
  padding: 0px;
  padding-top: 3vh;
  height: 100%;
`;

const CustomBox = muiStyled(Box)(() => ({
  backgroundColor: "rgba(255, 255, 255, 0.2)",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  border: "0.5px solid #D8D8D8",
  borderLeft: "0px",
  borderRight: "0px",
}));

const Styled = { BackgroundDiv, CustomBox };

export default Styled;
