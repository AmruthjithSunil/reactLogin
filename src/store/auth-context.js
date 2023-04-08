import React from "react";

const AuthContext = React.createContext({
  isLoggedIn: false,
  onLogout: () => {
    localStorage.setItem("isLoggedIn", "0");
    setIsLoggedIn(false);
  },
});

export default AuthContext;
