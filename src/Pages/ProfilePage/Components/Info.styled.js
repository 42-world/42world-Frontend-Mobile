import styled from "styled-components";

const InfoBox = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;

  color: white;
`;

const NameDiv = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: 900;
  font-size: 20px;
  line-height: 20px;

  color: #ffffff;
`;

const EmailDiv = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 20px;
  /* identical to box height, or 154% */

  color: #979797;
`;

const Styled = { NameDiv, EmailDiv, InfoBox };

export default Styled;
