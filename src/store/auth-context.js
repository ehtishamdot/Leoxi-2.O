import React, { useState } from "react";

const AuthContext = React.createContext({
  isLoggedIn: false,
  login: () => {},
  logout: () => {},
});

export const AuthContextProvider = (props) => {
  const [isLogin, setIsLogin] = useState(false);

  const loginHanlder = () => {
    setIsLogin(true);
  };
  const logoutHanlder = () => {
    setIsLogin(false);
  };

  const contextValue = {
    isLoggedIn: isLogin,
    login: loginHanlder,
    logout: logoutHanlder,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
