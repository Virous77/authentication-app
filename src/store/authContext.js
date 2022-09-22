import React, { useState } from "react";

const AuthContext = React.createContext({
  token: "",
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {},
  name: (name) => {},
});

export const AuthContextProvider = (props) => {
  const initialToken = localStorage.getItem("userToken");
  const initiaName = localStorage.getItem("name");

  const [token, setToken] = useState(initialToken);
  const [userName, setUserName] = useState(initiaName);

  const userLoggedIn = !!token;

  const logInHandler = (token) => {
    setToken(token);
    localStorage.setItem("userToken", token);
  };

  const logoutHandler = () => {
    setToken(null);
    localStorage.removeItem("name");
    localStorage.removeItem("userToken");
  };

  const nameHandler = (name) => {
    localStorage.setItem("name", name);
    setUserName(name);
  };

  const contextValue = {
    token: token,
    isLoggedIn: userLoggedIn,
    logout: logoutHandler,
    login: logInHandler,
    name: nameHandler,
    userName: userName,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};
export default AuthContext;
