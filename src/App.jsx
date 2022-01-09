import * as React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MainPage, ProfilePage } from "./Pages";

const ErrorPage = () => {
  return <>Error!</>;
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
};
export default App;

// http://skyrich3.synology.me:9930/
