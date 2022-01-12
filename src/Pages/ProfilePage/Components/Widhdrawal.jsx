import CommonStyled from "../Common.styled";

const Withdrawal = () => {
  const onWithdrawal = () => {
    console.log("회원 탈퇴 버튼 클릭");
  };
  return (
    <CommonStyled.CustomDiv>
      <div onClick={onWithdrawal}>회원 탈퇴</div>
    </CommonStyled.CustomDiv>
  );
};

export default Withdrawal;
