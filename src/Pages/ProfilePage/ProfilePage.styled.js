import { Box, styled } from "@mui/material";

const CustomBox = styled(Box)(() => ({
  backgroundColor: "rgba(255, 255, 255, 0.2)",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  border: "0.5px solid #D8D8D8",
  borderLeft: "0px",
  borderRight: "0px",
}));

const Styled = { CustomBox };

export default Styled;
