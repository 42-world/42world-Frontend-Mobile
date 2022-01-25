import * as React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import {
  MainPage,
  ProfilePage,
  LikedArticlePage,
  AuthPage,
  SettingPage,
  MyArticlePage,
  MyCommentPage,
  CategoryPage,
  ArticlePage,
  CreateArticlePage,
  LoginPage,
} from './Pages';

const ErrorPage = () => {
  return <>Error!</>;
};

// 글 보기 : 모드view?글id=12 or view/글id
// 글 작성 : free?mode=write
const App = () => {
  const isAuthorized = false;
  return (
    <Router>
      <Routes>
        {/* {!isAuthorized && (
          <Route path="/*" element={<Navigate replace to="/login" />} />
        )} */}

        <Route path="/" element={<MainPage />} />
        <Route path="login" element={<LoginPage isCallback={false} />} />
        <Route
          path="/auth/github/callback"
          element={<LoginPage isCallback={true} />}
        />

        <Route path="/category/:id" element={<CategoryPage />} />
        <Route path="/category/:id/create" element={<CreateArticlePage />} />

        <Route path="/article/:id" element={<ArticlePage />} />

        <Route path="/search" element={<MainPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/profile/setting" element={<SettingPage />} />
        <Route path="/profile/liked-article" element={<LikedArticlePage />} />
        <Route path="/profile/my-article" element={<MyArticlePage />} />
        <Route path="/profile/my-comment" element={<MyCommentPage />} />
        <Route path="/profile/auth" element={<AuthPage />} />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
};

export default App;

// http://skyrich3.synology.me:9930/

// 42world.kr/
//  42world.kr/board
//    42world.kr/board/free
//    42world.kr/board/anony
//  42world.kr/profile
