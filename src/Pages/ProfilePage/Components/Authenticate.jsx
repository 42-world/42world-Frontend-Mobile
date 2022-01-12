import { Box, Modal, Button } from "@mui/material";
import { ArrowForwardIos, Close } from "@mui/icons-material";
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
      <Modal open={isClick} onClose={onClick}>
        <div>
          <CommonStyled.ModalTitleDiv>
            인증하기
            <Button onClick={onClick}>
              <Close />
            </Button>
          </CommonStyled.ModalTitleDiv>
          <CommonStyled.CustomDiv>
            <input
              name="email"
              value={input.email}
              onChange={onChange}
              placeholder="인트라 아이디를 입력하세요"
            />
            {"@student.42seoul.kr"}
            <CommonStyled.CustomButton onClick={onAuthenticate}>
              인증
            </CommonStyled.CustomButton>
          </CommonStyled.CustomDiv>
        </div>
      </Modal>
    </>
  );
};

export default Authenticate;
