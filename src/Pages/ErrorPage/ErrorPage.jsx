import { useNavigate } from 'react-router-dom';
import Styled from './ErrorPage.styled';

const ErrorPage = () => {
  const navi = useNavigate();
  console.log('error page');
  return (
    <Styled.ErrorBackground>
      <img id="logo" src="/assets/error.png" style={{ width: '300px' }} />
      <Styled.ErrorBox>
        <div>
          <h1>404</h1>
          <h2>Page Not Found</h2>
        </div>
        <div>
          <h3>요청하신 페이지가 존재하지 않습니다.</h3>
          <h3>아래 로고를 눌러 홈으로 돌아가 주세요</h3>
        </div>
      </Styled.ErrorBox>
      <img id="button" src="/assets/headerLogo.svg" onClick={() => navi('/')} />
    </Styled.ErrorBackground>
  );
};

export default ErrorPage;
