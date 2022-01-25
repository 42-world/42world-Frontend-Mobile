import { Button, styled } from "@mui/material";

const CustomButton = styled(Button)(() => ({
  backgroundColor: "#53b7ba",

  fontFamily: "Roboto",
  fontStyle: "normal",
  fontWeight: "bold",
  fontSize: "11px",
  lineHeight: "13px",
  color: "rgba(255, 255, 255, 0.95)",
}));

const CustomDiv = styled("div")(() => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  width: "90%",
  margin: "12px",

  fontFamily: "Roboto",
  fontStyle: "normal",
  fontWeight: "500",
  color: "white",
  fontSize: "15px",
  lineHeight: "20px",
}));

const HeaderTitleDiv = styled("div")(() => ({
  fontFamily: "Roboto",
  fontStyle: "normal",
  fontWeight: "900",
  color: "white",
  fontSize: "30px",
  lineHeight: "20px",

  // 매직 넘버
  margin: "16px",
}));

const ModalTitleDiv = styled("div")(() => ({
  width: "100%",
  padding: "4px",
  paddingTop: "4vh",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",

  fontFamily: "Roboto",
  fontStyle: "normal",
  fontWeight: "900",
  color: "white",
  fontSize: "30px",
  lineHeight: "20px",
}));

const CommonStyled = { CustomDiv, CustomButton, HeaderTitleDiv, ModalTitleDiv };

export default CommonStyled;
