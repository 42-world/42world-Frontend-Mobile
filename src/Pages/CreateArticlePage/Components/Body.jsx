import { useState, useEffect } from 'react';
import { getCurCategory } from '../../../Utils';
import { useLocation, useNavigate } from 'react-router-dom';

const Body = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [curCate, setCurCate] = useState('');

  const loca = useLocation();

  const handleChangeTitle = e => {
    console.log(e.target.value);
  };

  useEffect(() => {
    setCurCate(getCurCategory(loca));
  }, []);
  return (
    <div className="body">
      <div className="category">{curCate}</div>
      <input placeholder="제목을 입력하세요" onChange={handleChangeTitle} />
      <textarea placeholder="내용을 입력하세요"></textarea>
    </div>
  );
};

export default Body;
