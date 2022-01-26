const EditArticlePageBody = ({
  cateId,
  curLength,
  onChangeTitle,
  title,
  onChangeContent,
  content,
}) => {
  return (
    <div className="body">
      <div className="category">{cateId}</div>
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
      <div>{curLength}/4200</div>
    </div>
  );
};

export default EditArticlePageBody;
