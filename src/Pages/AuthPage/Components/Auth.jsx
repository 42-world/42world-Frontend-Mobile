import { useEffect, useState } from 'react';
import Styled from './Auth.styled';

const authRequestInformation = intraId => {
  return (
    <>
      <div>
        <h2>{intraId}@student.42seoul.kr</h2>
        <h3>으로 인증메일이 전송되었습니다.</h3>
      </div>
      <div>
        <h3>받으신 이메일을 열어 ‘인증하기’ </h3>
        <h3>버튼을 클릭하면 인증이 완료됩니다.</h3>
      </div>
    </>
  );
};

const authRequestCheckStep = handleSendReset => {
  return (
    <>
      <div>
        <h4>혹시 메일을 받지 못하셨나요?</h4>
        <h4>전송에 최대 5분이 소요될 수 있습니다.</h4>
        <h4>스팸편지함을 확인해주세요.</h4>
        <h4>인트라 아이디에 오타가 없는지 확인해주세요.</h4>
        <button onClick={handleSendReset}>
          인트라 아이디에 오타가 없는지 확인해주세요.
        </button>
      </div>
    </>
  );
};

const Auth = () => {
  const [isSend, setIsSend] = useState(false);
  const [isBlock, setIsBlock] = useState(false);
  const [input, setInput] = useState({
    email: '',
  });

  const onChange = e => {
    const { name, value } = e.target;
    setInput({
      ...input,
      [name]: value,
    });
  };
  const handleAuthenticate = () => {
    setIsSend(true);
    setIsBlock(true);
    console.log(input.email, '로 인증 시도');
    setTimeout(() => {
      setIsBlock(false);
    }, 3000);
  };
  const handleSendReset = () => {
    setIsSend(false);
    setInput({
      email: '',
    });
  };

  return (
    <Styled.AuthDiv>
      <div>
        <input
          name="email"
          value={input.email}
          onChange={onChange}
          placeholder="인트라 아이디"
        />
        <span></span>
      </div>
      <button disabled={isBlock} onClick={handleAuthenticate}>
        인증
      </button>
      {isSend && authRequestInformation('echung')}
      {isSend && authRequestCheckStep(handleSendReset)}
    </Styled.AuthDiv>
  );
};

export default Auth;
