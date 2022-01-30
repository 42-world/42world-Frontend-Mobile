const getCategoryById = id => {
  switch (id) {
    case 1:
      return '자유 게시판';
    case 2:
      return '익명 게시판';
    default:
      return '';
  }
};

export default getCategoryById;
