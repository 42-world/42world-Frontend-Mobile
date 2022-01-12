import { Dialog, DialogTitle, IconButton } from "@mui/material";
import { useState } from "react";
import { ArrowForwardIos, Close, Person } from "@mui/icons-material";
import Styled from "./Info.styled";

const Info = () => {
  const email = "euimin3070@gmail.com";
  const [isClick, setIsClick] = useState(false);
  const [character, setCharacter] = useState(0);
  const [inputs, setInputs] = useState({
    nickname: "",
  });

  const onModalOpen = () => {
    setIsClick(!isClick);
  };
  const onModalClose = () => {
    setIsClick(!isClick);
    saveInfo();
  };
  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const saveInfo = () => {
    console.log(character, inputs.nickname, "로 정보 변경");
  };
  const onDuplicateCheck = () => {
    console.log(inputs.nickname, "으로 중복 확인");
  };
  return (
    <>
      <Styled.InfoBox onClick={onModalOpen}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={{ margin: "4px" }}>
            <Person fontSize="large" />
          </div>
          <div>
            <Styled.NameDiv>
              {email.slice(0, email.indexOf("@"))}
            </Styled.NameDiv>
            <Styled.EmailDiv>{email}</Styled.EmailDiv>
          </div>
        </div>
        <ArrowForwardIos />
      </Styled.InfoBox>
      <Dialog open={isClick} fullWidth>
        <DialogTitle sx={{ m: 0, p: 2 }}>
          프로필 설정
          <IconButton onClick={onModalClose}>
            <Close />
          </IconButton>
        </DialogTitle>
        <div>
          <div>캐릭터 선택</div>
          {[1, 2, 3, 4].map((value) => (
            <button key={value} onClick={() => setCharacter(value)}>
              캐릭터{value}
            </button>
          ))}
        </div>
        <div>
          <div>정보 변경</div>
          <input name="nickname" value={inputs.nickname} onChange={onChange} />
          <button onClick={onDuplicateCheck}>중복확인</button>
        </div>
      </Dialog>
    </>
  );
};

export default Info;
