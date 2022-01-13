import * as React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  MainPage,
  ProfilePage,
  LikedArticlePage,
  AuthPage,
  SettingPage,
  MyArticlePage,
  MyCommentPage,
  CategoryPage,
} from './Pages';

const ErrorPage = () => {
  return <>Error!</>;
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/category/*" element={<CategoryPage />} />
        <Route path="/category/*/*" element={<CategoryPage />} />

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
