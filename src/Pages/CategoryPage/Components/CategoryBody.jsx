import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import ArticleService from '../../../Network/ArticleService';

import { PreviewArticle } from '../../../Components';
import { getCurCategory } from '../../../Utils';

import CircularProgress from '@mui/material/CircularProgress';
import CreateIcon from '@mui/icons-material/Create';
import Fab from '@mui/material/Fab';

import Styled from './Body.styled';

const CategoryBody = () => {
  const [articles, setArticles] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [target, setTarget] = useState(null);
  const [curCate, setCurCate] = useState('');
  const loca = useLocation();
  const navi = useNavigate();
  const categoryId = loca.pathname.split('/')[2];

  const handleClickWrite = () => {
    navi(`${loca.pathname}/create`);
  };

  const handleClickArticles = id => {
    navi(`/article/${id}`);
  };

  const getMoreItem = async () => {
    setIsLoaded(true);
    // 실제 API 통신처럼 비동기로 받아오는 것을 구현하기 위해 1.5 초 뒤에 데이터를 갱신한다.
    // resolve, reject는 각각 성공 시, 실패 시의 동작을 의미. reject를 생략하니 reslove의 경우만 익명함수로 처리해주었다.
    // (categoryId);
    const newData = await ArticleService.getArticles(categoryId);
    setArticles(prevList => prevList.concat(newData));
    setIsLoaded(false);
  };

  useEffect(() => {
    setCurCate(getCurCategory(loca));
    // 무한 스크롤 임시 정지
    getMoreItem();
  }, [setCurCate, getMoreItem, getCurCategory, loca]);

  const onIntersect = async ([entry], observer) => {
    if (entry.isIntersecting && !isLoaded) {
      observer.unobserve(entry.target);
      await getMoreItem();
      observer.observe(entry.target);
    }
  };

  // useEffect(() => {
  //   let observer;
  //   if (target) {
  //     observer = new IntersectionObserver(onIntersect, {
  //       // ref 역할의 state가 존재한다면 intersection Observer 객체를 observer에 담는다.
  //       threshold: 0.4,
  //     });
  //     observer.observe(target); // observer가 해당 객체를 감시하여 변경된다면 onIntersect 콜백 함수를 실행할 것이다.
  //   }
  //   return () => observer && observer.disconnect(); // 주석 씌워도 잘 돌아가네?
  // }, [target]);

  return (
    <>
      <Styled.StyledList component="nav" aria-label="mailbox folders">
        <Styled.BoardTitleDiv>
          <div className="board_name">{curCate}</div>
        </Styled.BoardTitleDiv>

        {articles &&
          articles.map(article => {
            return (
              <PreviewArticle
                article={article}
                onClickArticle={() => handleClickArticles(article.id)}
              />
            );
          })}

        <div ref={setTarget} className="scroll_loading_progress">
          {isLoaded && <CircularProgress />}
        </div>

        {+categoryId !== 3 && (
          <Fab className="fab_button" onClick={handleClickWrite}>
            <CreateIcon />
          </Fab>
        )}
      </Styled.StyledList>
    </>
  );
};

export default CategoryBody;
