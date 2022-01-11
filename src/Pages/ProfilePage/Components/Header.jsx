import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const onClick = () => {
    navigate("/");
  };
  return (
    <div>
      <button onClick={onClick}>뒤로</button>
      <span>내 정보</span>
    </div>
  );
};

export default Header;
