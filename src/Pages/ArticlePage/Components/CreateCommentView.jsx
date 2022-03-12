import Fab from '@mui/material/Fab';
import ArrowUpwardRoundedIcon from '@mui/icons-material/ArrowUpwardRounded';

import Styled from '../ArticlePage.styled';

const CreateCommentView = ({
  handleClickSubmit,
  input,
  handleChange,
  placeholder,
  lastComment,
}) => {
  return (
    <>
      <Styled.CreateCommentViewDiv>
        <form onSubmit={handleClickSubmit}>
          <input
            required
            value={input}
            onChange={handleChange}
            placeholder={placeholder}
          />
          <Fab className="fab_button" type="submit">
            <ArrowUpwardRoundedIcon />
          </Fab>
        </form>
      </Styled.CreateCommentViewDiv>
      <div ref={lastComment}></div>
    </>
  );
};

export default CreateCommentView;
