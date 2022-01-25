import { useState } from 'react';
import Styled from './Auth.styled';

const Auth = () => {
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
    console.log(input.email, '로 인증 시도');
  };

  return (
    <Styled.AuthDiv>
      <div>42계정 인증</div>
      <input
        name="email"
        value={input.email}
        onChange={onChange}
        placeholder="인트라 아이디"
      />
      <span></span>
      <button onClick={handleAuthenticate}>인증</button>
    </Styled.AuthDiv>
  );
};

export default Auth;
