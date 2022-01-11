import { useState } from "react";

const Authenticate = () => {
  const [input, setInput] = useState({
    email: "",
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    setInput({
      ...input,
      [name]: value,
    });
  };

  const onAuthenticate = () => {
    console.log(input.email, "로 인증 시도");
  };
  return (
    <div>
      <div>인증하기</div>
      <input name="email" value={input.email} onChange={onChange} />
      <button onClick={onAuthenticate}>인증</button>
    </div>
  );
};

export default Authenticate;
