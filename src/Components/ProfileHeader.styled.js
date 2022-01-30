import styled from 'styled-components';
import GlobalStyled from '../Styled/Global.styled';

const ProfileHeaderDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: ${GlobalStyled.theme.headerHeight};
  background-color: ${GlobalStyled.theme.secondary};
  padding: 0.25rem 0.8rem;
  box-sizing: border-box;

  svg {
    color: ${GlobalStyled.theme.headerIconColor};
    cursor: pointer;
  }
  #unvisible {
    color: transparent;
  }
`;

const ProfileHeaderTitleDiv = styled.div`
  font-weight: 500;
  color: white;
  font-size: 2.2rem;
  line-height: 20px;
  // 매직 넘버
  /* margin: 16px; */
`;

const Styled = { ProfileHeaderDiv, ProfileHeaderTitleDiv };

export default Styled;
