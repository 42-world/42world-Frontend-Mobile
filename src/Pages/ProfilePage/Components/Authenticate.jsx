import { useState } from "react";

const Authenticate = () => {
  const [isClick, setIsClick] = useState(false);
  const [input, setInput] = useState({
    email: "",
  });

  const onClick = () => {
    setIsClick(!isClick);
  };

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
      <div onClick={onClick}>{"인증하기 >"}</div>
      {isClick && (
        <div>
          <button onClick={onClick}>뒤로</button>
          <input name="email" value={input.email} onChange={onChange} />
          {"@student.42seoul.kr"}
          <button onClick={onAuthenticate}>인증</button>
        </div>
      )}
    </div>
  );
};

export default Authenticate;
