const SettingPage = () => {
  return (
    <>
      Setting
      {/* <Dialog open={isClick} fullWidth>
        <DialogTitle sx={{ m: 0, p: 2 }}>
          프로필 설정
          <IconButton onClick={onModalClose}>
            <Close />
          </IconButton>
        </DialogTitle>
        <div>
          <div>캐릭터 선택</div>
          {[1, 2, 3, 4].map((value) => (
            <button key={value} onClick={() => setCharacter(value)}>
              캐릭터{value}
            </button>
          ))}
        </div>
        <div>
          <div>정보 변경</div>
          <input name="nickname" value={inputs.nickname} onChange={onChange} />
          <button onClick={onDuplicateCheck}>중복확인</button>
        </div>
      </Dialog> */}
    </>
  );
};

export default SettingPage;
