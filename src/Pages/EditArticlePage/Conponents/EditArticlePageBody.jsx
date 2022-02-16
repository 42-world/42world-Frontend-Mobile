import { getCategoryById } from 'Utils';
import TextareaAutosize from 'react-textarea-autosize';

import GlobalStyled from 'Styled/Global.styled';

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
        <div className="board_name">{getCategoryById(categoryId)}</div>
      </GlobalStyled.BoardTitleDiv>

      <form onSubmit={handleFormSubmit}>
        <input
          placeholder="제목을 입력하세요"
          onChange={onChangeTitle}
          maxLength={30}
          value={title}
        />
        <TextareaAutosize
          placeholder="내용을 입력하세요"
          onChange={onChangeContent}
          maxLength={4200}
          value={content}
        />
      </form>
      <p>{curLength}/4200</p>
    </div>
  );
};

export default EditArticlePageBody;
