import React from 'react';
import GlobalStyled from '../Styled/Global.styled';
import Styled from './Footer.styled';

const githubLink = 'https://github.com/42-world';
const emailLink = 'mailto:42world.official@gmail.com';
const articleLink = 'https://euimin.notion.site/42WORLD-925997bb2e7245b48fca5afeb298db76';

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
