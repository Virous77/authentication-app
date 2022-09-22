import React, { useContext } from "react";
import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Header from "./Components/Header/Header";
import Profile from "./Components/Profile/Profile";
import AuthForm from "./Components/Auth/AuthForm";
import Homepage from "./Components/Header/Homepage";
import AuthContext from "./store/authContext";
import ChangePass from "./Components/Profile/ChangePass";

function App() {
  const authCtx = useContext(AuthContext);

  return (
    <div className="App">
      <Header />
      <Routes>
        {authCtx.isLoggedIn && <Route path="/" element={<Homepage />} />}
        {authCtx.isLoggedIn && <Route path="profile" element={<Profile />} />}
        {!authCtx.isLoggedIn && <Route path="auth" element={<AuthForm />} />}
        {authCtx.isLoggedIn && (
          <Route path="changepass" element={<ChangePass />} />
        )}
        <Route path="*" element={<Navigate replace to="/auth" />} />
      </Routes>
    </div>
  );
}

export default App;
