import styled from 'styled-components';

import GlobalStyled from 'Styled/Global.styled';

const InfoDiv = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;

  color: white;

  .middle {
    display: flex;
    align-items: flex-end;
    .name {
      font-style: normal;
      font-weight: 900;
      font-size: 1.2rem;
      line-height: 20px;

      color: ${GlobalStyled.theme.textColorWhite};
    }
    .welcome-message {
      padding-left: 0.4rem;
      font-size: 0.5rem;
      color: ${GlobalStyled.theme.textColorLightGray};
    }
  }
`;

const Styled = { InfoDiv };

export default Styled;
