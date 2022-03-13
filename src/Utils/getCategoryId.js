const getCategoryId = id => {
  switch (id) {
    case '자유게시판':
      return 1;
    case '익명게시판':
      return 2;
    default:
      return 0;
  }
};

export default getCategoryId;
