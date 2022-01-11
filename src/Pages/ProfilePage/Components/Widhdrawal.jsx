const Withdrawal = () => {
  const onWithdrawal = () => {
    console.log("회원 탈퇴 버튼 클릭");
  };
  return (
    <div>
      <button onClick={onWithdrawal}>회원 탈퇴</button>
    </div>
  );
};

export default Withdrawal;
