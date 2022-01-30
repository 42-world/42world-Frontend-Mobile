import CommonStyled from '../Common.styled';

const Withdrawal = () => {
  const handleWithdrawal = () => {};
  return (
    <CommonStyled.CustomDiv>
      <div onClick={handleWithdrawal}>회원 탈퇴</div>
    </CommonStyled.CustomDiv>
  );
};

export default Withdrawal;
