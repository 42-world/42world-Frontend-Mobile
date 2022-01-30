import GlobalStyled from '../../../Styled/Global.styled';

const getCategoryName = id => {
  switch (id) {
    case 1:
      return '자유 게시판';
    case 2:
      return '익명 게시판';
    default:
      return '';
  }
};

const EditArticlePageBody = ({
  categoryId,
  curLength,
  onChangeTitle,
  title,
  onChangeContent,
  content,
  onSubmit,
}) => {
  const handleFormSubmit = e => {
    e.preventDefault();
    onSubmit();
  };
  return (
    <div className="body">
      <GlobalStyled.BoardTitleDiv>
        <div className="board_name">{getCategoryName(categoryId)}</div>
      </GlobalStyled.BoardTitleDiv>

      <form onSubmit={handleFormSubmit}>
        <input
          placeholder="제목을 입력하세요"
          onChange={onChangeTitle}
          maxLength={42}
          type="text"
          value={title}
        />
        <textarea
          placeholder="내용을 입력하세요"
          onChange={onChangeContent}
          maxLength={4200}
          value={content}
        />
      </form>
      <div>{curLength}/4200</div>
    </div>
  );
};

export default EditArticlePageBody;
