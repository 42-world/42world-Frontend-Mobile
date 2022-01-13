import CommonStyled from '../Common.styled';

const Withdrawal = () => {
  const handleWithdrawal = () => {
    console.log('회원 탈퇴 버튼 클릭');
  };
  return (
    <CommonStyled.CustomDiv>
      <div onClick={handleWithdrawal}>회원 탈퇴</div>
    </CommonStyled.CustomDiv>
  );
};

export default Withdrawal;
