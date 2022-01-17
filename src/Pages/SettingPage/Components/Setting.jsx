import { useState } from 'react';
import Styled from './Setting.styled';

const Setting = () => {
  const [character, setCharacter] = useState(0);
  const [input, setInput] = useState({
    nickname: '',
  });

  let profile_list = [
    '../assets/profile_test.png',
    '../assets/profile_test.png',
    '../assets/profile_test.png',
    '../assets/profile_test.png',
  ];

  const handleChange = e => {
    const { name, value } = e.target;
    setInput({
      ...input,
      [name]: value,
    });
  };

  const handleDuplicateCheck = () => {
    console.log(input.nickname, '중복 확인');
  };

  const handleCharacterClick = value => {
    setCharacter(value);
    console.log(`${character}에서 ${value}로 캐릭터 변경`);
  };

  return (
    <Styled.SettingDiv>
      <div className="setting_container_title">캐릭터 선택</div>
      <div className="profile_image_div">
        {profile_list.map(value => (
          <button key={value} onClick={() => handleCharacterClick(value)}>
            <img src={value} alt="profile" />
          </button>
        ))}
      </div>
      <div className="setting_container_title">정보 변경</div>
      <div className="profile_name_div">
        <label htmlFor="nickname">닉네임</label>
        <div>
          <input
            id="nickname"
            name="nickname"
            value={input.nickname}
            onChange={handleChange}
            placeholder="새로운 닉네임"
          />
          <button onClick={handleDuplicateCheck}>중복 확인</button>
        </div>
      </div>
    </Styled.SettingDiv>
  );
};

export default Setting;
