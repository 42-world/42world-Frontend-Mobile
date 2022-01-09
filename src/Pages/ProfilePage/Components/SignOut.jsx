const SignOut = () => {
  const onClick = () => {
    console.log("로그아웃 버튼 클릭");
  };
  return (
    <div>
      <button onClick={onClick}>로그아웃</button>
    </div>
  );
};

export default SignOut;
