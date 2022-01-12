import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthPage = () => {
  const [input, setInput] = useState({
    email: "",
  });
  const navigate = useNavigate();

  const onChange = (e) => {
    const { name, value } = e.target;
    setInput({
      ...input,
      [name]: value,
    });
  };
  const onClick = () => {
    navigate(-1);
  };
  const onAuthenticate = () => {
    console.log(input.email, "로 인증 시도");
  };
  return (
    <>
      auth
      <div>
        <div>
          {/* <div>
            인증하기
            <Button onClick={onClick}>
              <Close />
            </Button>
          </div>
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
          </CommonStyled.CustomDiv> */}
        </div>
      </div>
    </>
  );
};

export default AuthPage;
