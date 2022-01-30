import { useContext, useState } from 'react';
import { AuthContext } from '../../../App';
import UserService from '../../../Network/UserService';
import { PROFILE_LIST } from '../../../Utils/profileList';
import Styled from './Setting.styled';

const Setting = () => {
  const auth = useContext(AuthContext);
  const curUser = auth.curUser;
  const [character, setCharacter] = useState(curUser ? curUser.character : 0);
  const [input, setInput] = useState({
    nickname: '',
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setInput({
      ...input,
      [name]: value,
    });
  };

  const handleDuplicateCheck = () => {};

  const handleCharacterClick = async value => {
    await UserService.updateUser({ character: value });

    setCharacter(value);
    window.alert('캐릭터 변경 완료');
    auth.setIsLoading(true);
  };

  return (
    <Styled.SettingDiv>
      <div className="setting_container_title">캐릭터 선택</div>
      <div className="profile_image_div">
        {PROFILE_LIST.map(profile => (
          <button
            key={profile.id}
            onClick={() => handleCharacterClick(profile.id)}
          >
            {profile.id === character ? (
              <Styled.OutlineImage src={profile.image} alt="profile" />
            ) : (
              <img src={profile.image} alt="profile" />
            )}
          </button>
        ))}
      </div>
      {/* <div className="setting_container_title">정보 변경</div>
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
      </div> */}
    </Styled.SettingDiv>
  );
};

export default Setting;
