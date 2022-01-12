import { ArrowForwardIos } from "@mui/icons-material";
import { Dialog } from "@mui/material";
import { useState } from "react";
import CommonStyled from "../Common.styled";

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
    <>
      <CommonStyled.CustomDiv onClick={onClick}>
        <div>인증하기</div>
        <ArrowForwardIos />
      </CommonStyled.CustomDiv>
      <Dialog open={isClick}>
        <div>
          <button onClick={onClick}>뒤로</button>
          <input name="email" value={input.email} onChange={onChange} />
          {"@student.42seoul.kr"}
          <button onClick={onAuthenticate}>인증</button>
        </div>
      </Dialog>
    </>
  );
};

export default Authenticate;
