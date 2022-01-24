const getCurCategory = loca => {
  const pathArray = loca.pathname.split('/');
  switch (pathArray[2]) {
    case 'free':
      return '자유 게시판';
    case 'anony':
      return '익명 게시판';
    default:
      return '';
  }
};

export default getCurCategory;
