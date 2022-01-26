import { useNavigate } from 'react-router-dom';

const ErrorPage = () => {
  const navi = useNavigate();
  return (
    <div style={{ backgroundColor: 'black' }}>
      <img src="/assets/error.png" style={{ backgroundColor: 'black' }} />
      <img src="/assets/headerLogo.svg" onClick={() => navi('/')} />
    </div>
  );
};

export default ErrorPage;
