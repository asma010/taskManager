import React, { useState, useEffect } from "react";
import LoginContainer from "./components/LoginContainer";
import TasksContainer from "./components/TasksContainer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Profile from "./components/ProfileContainer";
import { RecoilRoot } from "recoil";
import PrivateRoute from "./PrivateRoute";

function App() {

  useEffect(() => {
    const loginCheck = localStorage.getItem("isLoggedIn");
    if (loginCheck === "yes") {
    }
  }, []);
  return (
    <RecoilRoot>
      <Router>
        <Routes>
          <Route path="/login" element={<LoginContainer/>}/>
          <Route path="/"
              element={
                <PrivateRoute>
                  <TasksContainer/>
                </PrivateRoute>
                  }
              />
          <Route path="/profile" 
              element={
                <PrivateRoute>
                  <Profile/>
                </PrivateRoute>
                  }
              />
        </Routes>
      </Router>
    </RecoilRoot>
  );
}

export default App;
