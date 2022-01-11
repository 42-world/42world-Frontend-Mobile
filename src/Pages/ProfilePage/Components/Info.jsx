import { useState } from "react";

const Info = () => {
  const [isClick, setIsClick] = useState(false);
  const [character, setCharacter] = useState(0);
  const [inputs, setInputs] = useState({
    nickname: "",
  });

  const onClick = () => {
    setIsClick(!isClick);
  };
  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const onDuplicateCheck = () => {
    console.log(inputs.nickname, "으로 중복 확인");
  };
  const onSaveInfo = () => {
    console.log(character, inputs.nickname, "로 정보 변경");
  };
  return (
    <>
      <div onClick={onClick} style={{ display: "flex" }}>
        <img src="#" />
        <div>
          <div>euimin3079</div>
          <div>euimin3079@gmail.com</div>
        </div>
        {">"}
      </div>
      {isClick && (
        <div>
          <button onClick={onClick}>뒤로</button>
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
            <input
              name="nickname"
              value={inputs.nickname}
              onChange={onChange}
            />
            <button onClick={onDuplicateCheck}>중복확인</button>
          </div>
          <button onClick={onSaveInfo}>저장하기</button>
        </div>
      )}
    </>
  );
};

export default Info;
