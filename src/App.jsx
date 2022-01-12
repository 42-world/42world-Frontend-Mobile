import * as React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MainPage, ProfilePage } from './Pages';

const ErrorPage = () => {
  return <>Error!</>;
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/category/anony" element={<MainPage />} />
        <Route path="/category/free" element={<MainPage />} />
        <Route path="/search" element={<MainPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/profile/setting" element={<ProfilePage />} />
        <Route path="/profile/liked-article" element={<ProfilePage />} />
        <Route path="/profile/my-article" element={<ProfilePage />} />
        <Route path="/profile/my-comment" element={<ProfilePage />} />
        <Route path="/profile/auth" element={<ProfilePage />} />
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
