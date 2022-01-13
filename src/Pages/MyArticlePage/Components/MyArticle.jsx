const MyArticle = () => {
  const articles = ["글1", "글2", "글3"];
  return (
    <>
      <div>
        {articles.map((article, idx) => (
          <div key={idx}>{article}</div>
        ))}
      </div>
    </>
  );
};

export default MyArticle;
