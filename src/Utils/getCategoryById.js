const getCategoryById = id => {
  switch (id) {
    case 1:
      return '자유 게시판';
    case 2:
      return '익명 게시판';
    case '3':
      return '42born2code 공지';
    default:
      return '';
  }
};

export default getCategoryById;
