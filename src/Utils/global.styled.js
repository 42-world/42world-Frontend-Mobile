import styled from "styled-components";
import Box from "@mui/material/Box";

const CusBox = styled(Box)`
  && {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 30%;
    height: 80%;
    background: white;
    border: 2px solid #000;
    boxshadow: 24;
    pt: 2;
    px: 4;
    pb: 3;
  }
`;

export default { CusBox };
