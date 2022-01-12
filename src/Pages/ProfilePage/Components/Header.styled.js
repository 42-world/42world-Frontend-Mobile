import styled from "styled-components";

const HFlexBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const TitleDiv = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: 900;
  color: white;
  font-size: 30px;
  line-height: 20px;

  // 매직 넘버
  margin: 16px;
`;

const Styled = { HFlexBox, TitleDiv };

export default Styled;
