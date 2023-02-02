import React from "react";
import LoginContainer from "./components/LoginContainer";
import TasksContainer from "./components/TasksContainer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Profile from "./components/ProfileContainer";
import PrivateRoute from "./PrivateRoute";
import { AuthContextProvider } from "./context/AuthContext";
import InitialRequest from "./InitialRequest";
import { RecoilRoot } from "recoil";

function App() {
  return (
    <Router>
      <RecoilRoot>
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
      </RecoilRoot>
    </Router>
  );
}

export default App;
