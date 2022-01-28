import * as React from 'react';
import { useState, createContext } from 'react';
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
  EditArticlePage,
  LoginPage,
  AlarmPage,
  ErrorPage,
} from './Pages';
import Loading from './Components/Loading';
import { useContext } from 'react';
import UserService from './Network/UserService';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [state, setState] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [curUser, setCurUser] = useState(null);

  React.useEffect(() => {
    const initState = async () => {
      let response;
      try {
        response = await UserService.getUser();
      } catch (e) {
        console.log('app : ', e);
      }
      if (!response) setState(false);
      else {
        setState(true);
        setCurUser(response);
      }
      setIsLoading(false);
    };
    initState();
  }, []);

  return (
    <AuthContext.Provider value={{ state, isLoading, setState, curUser }}>
      {children}
    </AuthContext.Provider>
  );
};

const PrivateRoute = ({ children }) => {
  const auth = useContext(AuthContext);
  // console.log(auth.curUser);

  if (auth.isLoading) {
    return <Loading />;
  } else {
    // if (auth.state) return children;
    if (auth.state && auth.curUser.isAuthenticated) return children;
    else if (auth.state) return <Navigate to="/profile" />;
    else return <Navigate to="/login" />;
  }
};
// 글 보기 : 모드view?글id=12 or view/글id
// 글 작성 : free?mode=write
const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="login" element={<LoginPage isCallback={false} />} />
          <Route
            path="/auth/github/callback"
            element={<LoginPage isCallback={true} />}
          />
          <Route
            path="/"
            element={
              <PrivateRoute>
                <MainPage />
              </PrivateRoute>
            }
          />
          <Route
            path="/alarm"
            element={
              <PrivateRoute>
                <AlarmPage />
              </PrivateRoute>
            }
          />

          <Route
            path="/category/:id"
            element={
              <PrivateRoute>
                <CategoryPage />
              </PrivateRoute>
            }
          />
          <Route
            path="/category/:id/create"
            element={
              <PrivateRoute>
                <CreateArticlePage />
              </PrivateRoute>
            }
          />

          <Route
            path="/article/:id"
            element={
              <PrivateRoute>
                <ArticlePage />
              </PrivateRoute>
            }
          />

          <Route
            path="/article/:id/edit"
            element={
              <PrivateRoute>
                <EditArticlePage />
              </PrivateRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <PrivateRoute>
                <ProfilePage />
              </PrivateRoute>
            }
          />
          <Route
            path="/profile/setting"
            element={
              <PrivateRoute>
                <SettingPage />
              </PrivateRoute>
            }
          />
          <Route
            path="/profile/liked-article"
            element={
              <PrivateRoute>
                <LikedArticlePage />
              </PrivateRoute>
            }
          />
          <Route
            path="/profile/my-article"
            element={
              <PrivateRoute>
                <MyArticlePage />
              </PrivateRoute>
            }
          />
          <Route
            path="/profile/my-comment"
            element={
              <PrivateRoute>
                <MyCommentPage />
              </PrivateRoute>
            }
          />
          <Route
            path="/profile/auth"
            element={
              <PrivateRoute>
                <AuthPage />
              </PrivateRoute>
            }
          />
          <Route
            path="/*"
            element={
              <PrivateRoute>
                <ErrorPage />
              </PrivateRoute>
            }
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;

// http://skyrich3.synology.me:9930/

// 42world.kr/
//  42world.kr/board
//    42world.kr/board/free
//    42world.kr/board/anony
//  42world.kr/profile

// const isLogin = () => {
//   const response = UserService.getUser();
//   if (response) return true;
//   return false;
// };
