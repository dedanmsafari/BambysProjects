import React, { createContext, useState } from "react";
import { View, StyleSheet } from "react-native";

export const AuthenticationContext = createContext();

const AuthenticationProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false);

  const value = {
    loggedIn,
    setLoggedIn,
  };
  return (
    <AuthenticationContext.Provider value={value}>
      {children}
    </AuthenticationContext.Provider>
  );
};

export default AuthenticationProvider;
