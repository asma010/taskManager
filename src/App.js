import React, { useEffect, useState } from "react";
import LoginContainer from "./components/LoginContainer";
import TasksContainer from "./components/TasksContainer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Profile from "./components/ProfileContainer";
import PrivateRoute from "./PrivateRoute";
import { AuthContextProvider } from "./context/AuthContext";
import InitialRequest from "./InitialRequest";
import { RecoilRoot } from "recoil";
import Loading from "./components/Loading ";

function App() {
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsInitialized(true); 
    }, 1000);
  }, []);

  return (
    <Router>
      <RecoilRoot>
        {isInitialized ? (
          <>
            <InitialRequest />
        <AuthContextProvider>
          <Routes>
            <Route path="/login" element={<LoginContainer />} />
            <Route
              path="/"
              element={
                <PrivateRoute>
                  <TasksContainer />
                </PrivateRoute>
              }
            />
            <Route
              path="/profile"
              element={
                <PrivateRoute>
                  <Profile />
                </PrivateRoute>
              }
            />
          </Routes>
        </AuthContextProvider>
        </>):(
          <Loading isTaskLoading={false} />
        )}
      </RecoilRoot>
    </Router>
  );
}

export default App;
