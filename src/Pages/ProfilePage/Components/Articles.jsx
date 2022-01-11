import { useState } from "react";

const Articles = ({ type }) => {
  const articles = ["글1", "글2", "글3"];
  const [isClick, setIsClick] = useState(false);

  const onClick = () => {
    setIsClick(!isClick);
  };
  return (
    <div>
      <button onClick={onClick}>{`${type} >`}</button>
      {isClick && (
        <>
          <div>
            <button onClick={onClick}>뒤로</button>
          </div>
          <div>
            {articles.map((article, idx) => (
              <div key={idx}>{article}</div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Articles;
