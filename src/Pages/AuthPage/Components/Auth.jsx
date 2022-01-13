import { useState } from 'react';

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
    <div>
      <input
        name="email"
        value={input.email}
        onChange={onChange}
        placeholder="인트라 아이디를 입력하세요"
      />
      {'@student.42seoul.kr'}
      <button onClick={handleAuthenticate}>인증</button>
    </div>
  );
};

export default Auth;
