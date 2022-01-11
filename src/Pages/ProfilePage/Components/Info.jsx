import { useState } from "react";

const Info = () => {
  const [character, setCharacter] = useState(0);
  const [inputs, setInputs] = useState({
    nickname: "",
  });

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
      <div>내 정보</div>
      <div>euimin3079님, 안녕하세요!</div>
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
      <button onClick={onSaveInfo}>저장하기</button>
    </>
  );
};

export default Info;
