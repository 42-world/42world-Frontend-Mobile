import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { PreviewArticleNoti, PreviewArticle } from '../../../Components';
import { getCategoryByUrl } from '../../../Utils';

import ArticleService from '../../../Network/ArticleService';
import Styled from './Body.styled';
import GlobalStyled from '../../../Styled/Global.styled';

import CircularProgress from '@mui/material/CircularProgress';
import CreateIcon from '@mui/icons-material/Create';
import Fab from '@mui/material/Fab';

const CategoryBody = () => {
  const [articles, setArticles] = useState([]);
  const [isLoaded, setIsLoaded] = useState(true);
  const [page, setPage] = useState(1);
  const [hasNextPage, setHasNextPage] = useState(true);
  const [target, setTarget] = useState(null);
  const [curCate, setCurCate] = useState('');
  const loca = useLocation();
  const navi = useNavigate();
  const categoryId = loca.pathname.split('/')[2];

  const handleClickWrite = () => {
    navi('/create');
  };

  const handleClickArticles = id => {
    navi(`/article/${id}`);
  };

  const setInitalArticles = async () => {
    setIsLoaded(true);
    const result = await ArticleService.getArticles(categoryId);
    const meta = result.meta;

    setArticles(result.data);
    setIsLoaded(false);
    setHasNextPage(meta.hasNextPage);
  };

  useEffect(() => {
    if (categoryId !== '1' && categoryId !== '3') {
      alert('준비 중입니다!');
      navi('/');
    }
    setCurCate(getCategoryByUrl(loca));
    setInitalArticles();
  }, []);

  // 무한 스크롤 임시 정지

  const getMoreItem = async () => {
    if (!hasNextPage) return;

    setIsLoaded(true);
    // 실제 API 통신처럼 비동기로 받아오는 것을 구현하기 위해 1.5 초 뒤에 데이터를 갱신한다.
    // resolve, reject는 각각 성공 시, 실패 시의 동작을 의미. reject를 생략하니 reslove의 경우만 익명함수로 처리해주었다.
    // (categoryId);
    const result = await ArticleService.getArticles(categoryId, page);
    const newData = result.data;
    const meta = result.meta;

    setPage(prevPage => prevPage + 1);
    setHasNextPage(meta.hasNextPage);
    setArticles(prevList => prevList.concat(newData));
    setIsLoaded(false);
  };

  const onIntersect = async ([entry], observer) => {
    if (entry.isIntersecting && !isLoaded) {
      observer.unobserve(entry.target);
      await getMoreItem();
      observer.observe(entry.target);
    }
  };

  useEffect(() => {
    let observer;
    if (target) {
      observer = new IntersectionObserver(onIntersect, {
        // ref 역할의 state가 존재한다면 intersection Observer 객체를 observer에 담는다.
        threshold: 0.4,
      });
      observer.observe(target); // observer가 해당 객체를 감시하여 변경된다면 onIntersect 콜백 함수를 실행할 것이다.
    }
    return () => observer && observer.disconnect(); // 주석 씌워도 잘 돌아가네?
  }, [target]);

  return (
    <>
      <Styled.StyledList component="nav" aria-label="mailbox folders">
        <GlobalStyled.BoardTitleDiv>
          <div className="board_name">{curCate}</div>
        </GlobalStyled.BoardTitleDiv>

        {articles &&
          articles.map(article => {
            if (categoryId === '3')
              return (
                <PreviewArticleNoti
                  key={article.id}
                  article={article}
                  onClickArticle={() => handleClickArticles(article.id)}
                />
              );
            else
              return (
                <PreviewArticle
                  key={article.id}
                  article={article}
                  onClickArticle={() => handleClickArticles(article.id)}
                />
              );
          })}

        <div ref={setTarget} className="scroll_loading_progress">
          {isLoaded && <CircularProgress />}
        </div>

        {/* {+categoryId !== 3 && ( */}
        <Fab
          className="fab_button"
          onClick={handleClickWrite}
          style={{ backgroundColor: '#53b7ba' }}
        >
          <CreateIcon />
        </Fab>
        {/* )} */}
      </Styled.StyledList>
    </>
  );
};

export default CategoryBody;
