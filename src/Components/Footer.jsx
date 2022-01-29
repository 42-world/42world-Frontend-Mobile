import React from 'react';
import GlobalStyled from '../Styled/Global.styled';
import Styled from './Footer.styled';

const githubLink = '깃링크';
const emailLink = 'mailto:이메일링크';
const articleLink = '블로그링크';

const Footer = () => {
  return (
    <Styled.Footer>
      <div>
        <img
          src={GlobalStyled.assets.footer.github}
          alt="github"
          onClick={() => {
            window.open(githubLink);
          }}
        />
        <img
          src={GlobalStyled.assets.footer.mail}
          alt="mail"
          onClick={() => {
            window.open(emailLink);
          }}
        />
        <img
          src={GlobalStyled.assets.footer.article}
          alt="article"
          onClick={() => {
            window.open(articleLink);
          }}
        />
      </div>
      <h6>© 2022. Team 42world</h6>
    </Styled.Footer>
  );
};

export default Footer;
