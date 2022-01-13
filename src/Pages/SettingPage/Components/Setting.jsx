import { useState } from 'react';

const Setting = () => {
  const [character, setCharacter] = useState(0);
  const [input, setInput] = useState({
    nickname: '',
  });

  const onChange = e => {
    const { name, value } = e.target;
    setInput({
      ...input,
      [name]: value,
    });
  };

  const handleDuplicateCheck = () => {
    console.log(input.nickname, '중복 확인');
  };

  const onCharacterClick = value => {
    setCharacter(value);
    console.log(`${character}에서 ${value}로 캐릭터 변경`);
  };

  return (
    <>
      <div>
        <div>캐릭터 선택</div>
        {[0, 1, 2, 3].map(value => (
          <button key={value} onClick={() => onCharacterClick(value)}>
            캐릭터{value}
          </button>
        ))}
      </div>
      <div>
        <div>정보 변경</div>
        <label htmlFor="nickname">닉네임</label>
        <div>
          <input
            id="nickname"
            name="nickname"
            value={input.nickname}
            onChange={onChange}
            placeholder="새로운 닉네임을 입력하세요"
          />
          <button onClick={handleDuplicateCheck}>중복 확인</button>
        </div>
      </div>
    </>
  );
};

export default Setting;
