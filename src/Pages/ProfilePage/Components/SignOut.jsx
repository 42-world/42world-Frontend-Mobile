const SignOut = () => {
  const onSignOut = () => {
    console.log("로그아웃 버튼 클릭");
  };
  return (
    <div>
      <button onClick={onSignOut}>로그아웃</button>
    </div>
  );
};

export default SignOut;
