import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const EditArticlePageHeader = ({ onClickCancel, onClickSubmit }) => {
  return (
    <div className="header">
      <div>
        <ArrowBackIcon onClick={onClickCancel} />
      </div>
      <div>
        <span>글 수정하기</span>
      </div>
      <div>
        <Button
          onClick={onClickSubmit}
          variant="outlined"
          className="submit_button"
        >
          완료
        </Button>
      </div>
    </div>
  );
};

export default EditArticlePageHeader;
