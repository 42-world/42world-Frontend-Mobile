// 2022 1 30 1차 배포
import { useState, createContext, useEffect, useContext } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import { QueryClient, QueryClientProvider, QueryCache } from 'react-query';

import { UserService } from 'Network';

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
import { Loading } from 'Components';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [state, setState] = useState(200);
  const [isLoading, setIsLoading] = useState(true);
  const [curUser, setCurUser] = useState(null);

  useEffect(() => {
    const initState = async () => {
      let response;
      try {
        response = await UserService.getUser();
      } catch (e) {
        console.log('app : ', e);
      }
      setCurUser(response.data);
      setState(response.state);
      setIsLoading(false);
    };
    initState();
  }, [isLoading]);

  return (
    <AuthContext.Provider value={{ state, isLoading, curUser, setIsLoading }}>
      {children}
    </AuthContext.Provider>
  );
};

const PrivateRouteCheckAuth = ({ children }) => {
  const auth = useContext(AuthContext);

  if (auth.isLoading) {
    return <Loading />;
  } else {
    if (auth.state !== 401) return children;
    else return <Navigate to="/login" />;
    // return children;
  }
};

const PrivateRouteCheckFtAuth = ({ children }) => {
  const auth = useContext(AuthContext);
  if (auth.state === 200) return children;
  else return <Navigate to="/profile" />;
  // return children;
};

const queryClient = new QueryClient({
  defaultOptions: {
    onError: () => {
      console.log('시발');
    },
    queries: { retry: false, suspense: true },
  },
  // queryCache: new QueryCache({
  //   onError: () => alert('시발'),
  // }),
});

// 글 보기 : 모드view?글id=12 or view/글id
// 글 작성 : free?mode=write
const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/login" element={<LoginPage isCallback={false} />} />
            <Route
              path="/auth/github/callback"
              element={<LoginPage isCallback={true} />}
            />
            <Route
              path="/"
              element={
                <PrivateRouteCheckAuth>
                  <PrivateRouteCheckFtAuth>
                    <MainPage />
                  </PrivateRouteCheckFtAuth>
                </PrivateRouteCheckAuth>
              }
            />
            <Route
              path="/alarm"
              element={
                <PrivateRouteCheckAuth>
                  <PrivateRouteCheckFtAuth>
                    <AlarmPage />
                  </PrivateRouteCheckFtAuth>
                </PrivateRouteCheckAuth>
              }
            />

            <Route
              path="/category/:id"
              element={
                <PrivateRouteCheckAuth>
                  <PrivateRouteCheckFtAuth>
                    <CategoryPage />
                  </PrivateRouteCheckFtAuth>
                </PrivateRouteCheckAuth>
              }
            />
            <Route
              path="/create"
              element={
                <PrivateRouteCheckAuth>
                  <PrivateRouteCheckFtAuth>
                    <CreateArticlePage />
                  </PrivateRouteCheckFtAuth>
                </PrivateRouteCheckAuth>
              }
            />

            <Route
              path="/article/:id"
              element={
                <PrivateRouteCheckAuth>
                  <PrivateRouteCheckFtAuth>
                    <ArticlePage />
                  </PrivateRouteCheckFtAuth>
                </PrivateRouteCheckAuth>
              }
            />

            <Route
              path="/article/:id/edit"
              element={
                <PrivateRouteCheckAuth>
                  <PrivateRouteCheckFtAuth>
                    <EditArticlePage />
                  </PrivateRouteCheckFtAuth>
                </PrivateRouteCheckAuth>
              }
            />

            <Route
              path="/profile"
              element={
                <PrivateRouteCheckAuth>
                  <ProfilePage />
                </PrivateRouteCheckAuth>
              }
            />
            <Route
              path="/profile/setting"
              element={
                <PrivateRouteCheckAuth>
                  <PrivateRouteCheckFtAuth>
                    <SettingPage />
                  </PrivateRouteCheckFtAuth>
                </PrivateRouteCheckAuth>
              }
            />
            <Route
              path="/profile/liked-article"
              element={
                <PrivateRouteCheckAuth>
                  <PrivateRouteCheckFtAuth>
                    <LikedArticlePage />
                  </PrivateRouteCheckFtAuth>
                </PrivateRouteCheckAuth>
              }
            />
            <Route
              path="/profile/my-article"
              element={
                <PrivateRouteCheckAuth>
                  <PrivateRouteCheckFtAuth>
                    <MyArticlePage />
                  </PrivateRouteCheckFtAuth>
                </PrivateRouteCheckAuth>
              }
            />
            <Route
              path="/profile/my-comment"
              element={
                <PrivateRouteCheckAuth>
                  <PrivateRouteCheckFtAuth>
                    <MyCommentPage />
                  </PrivateRouteCheckFtAuth>
                </PrivateRouteCheckAuth>
              }
            />
            <Route
              path="/profile/auth"
              element={
                <PrivateRouteCheckAuth>
                  <AuthPage />
                </PrivateRouteCheckAuth>
              }
            />
            <Route path="/*" element={<ErrorPage />} />
          </Routes>
        </Router>
      </AuthProvider>
    </QueryClientProvider>
  );
};

export default App;

// http://skyrich3.synology.me:9930/

// 42world.kr/
//  42world.kr/board
//    42world.kr/board/free
//    42world.kr/board/anony
//  42world.kr/profile
