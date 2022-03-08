import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { getCategoryByUrl } from 'Utils';
import { ArticleService } from 'Network';

import { PreviewArticleNoti, PreviewArticle } from 'Components';
import CircularProgress from '@mui/material/CircularProgress';
import NativeSelect from '@mui/material/NativeSelect';
import FormControl from '@mui/material/FormControl';
import Fab from '@mui/material/Fab';
import CreateIcon from '@mui/icons-material/Create';

import GlobalStyled from 'Styled/Global.styled';
import Styled from './Body.styled';

const CategoryBody = () => {
  const [articles, setArticles] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  // const [page, setPage] = useState(1);
  let page = 1;
  // const [hasNextPage, setHasNextPage] = useState(true);
  let hasNextPage = true;
  const [target, setTarget] = useState(null);
  const cateList = ['자유 게시판', '익명 게시판', '공지 게시판'];
  const loca = useLocation();
  const navi = useNavigate();
  const categoryId = loca.pathname.split('/')[2];

  const handleClickWrite = () => {
    navi('/create');
  };

  const handleClickArticles = id => {
    navi(`/article/${id}`);
  };

  const handleChangeCate = id => {
    navi(`/category/${parseInt(id) + 1}`);
  };

  const getMoreArticles = async () => {
    if (!hasNextPage) return;

    setIsLoaded(true);
    const result = await ArticleService.getArticles(categoryId, page);
    const newData = result.data;
    const meta = result.meta;
    // setPage(prevPage => prevPage + 1);
    page += 1;
    // setHasNextPage(meta.hasNextPage);
    hasNextPage = meta.hasNextPage;
    setArticles(prevList => prevList.concat(newData));
    setIsLoaded(false);
  };

  const onIntersect = async ([entry], observer) => {
    if (entry.isIntersecting && !isLoaded) {
      // if (page === 1 && hasNextPage) console.log("리렌더링 확인")
      observer.unobserve(entry.target);
      await getMoreArticles();
      observer.observe(entry.target);
    }
  };

  // 존재하지 않는 categortId 일 경우의 예외 처리, 하드 코딩.
  useEffect(() => {
    if (categoryId > 3) {
      navi('/error');
    }
    setArticles([]);
    // 리렌더링 되면서 let으로 선언한 page, hasNextPage가 자동으로 초기화 되므로 state만 초기화 주면 된다.
    // page = 1;
    // hasNextPage = true;
  }, [categoryId]);

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
  }, [target, categoryId]);

  return (
    <>
      <Styled.StyledList component="nav" aria-label="mailbox folders">
        <GlobalStyled.BoardTitleDiv>
          <FormControl className="category_form" fullWidth>
            <NativeSelect
              defaultValue={categoryId - 1}
              onChange={e => {
                handleChangeCate(e.target.value);
              }}
            >
              {cateList.map((cate, idx) => {
                return <option value={idx}>{cate}</option>;
              })}
            </NativeSelect>
          </FormControl>
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

        {+categoryId !== 3 && (
          <Fab
            className="fab_button"
            onClick={handleClickWrite}
            style={{ backgroundColor: '#53b7ba' }}
          >
            <CreateIcon />
          </Fab>
        )}
      </Styled.StyledList>
    </>
  );
};

export default CategoryBody;
