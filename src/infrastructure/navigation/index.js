import React, { useContext } from "react";
import AppNavigator from "./app.navigator";
import AccountNavigator from "./account.navigator";
import { NavigationContainer } from "@react-navigation/native";
import { AuthenticationContext } from "../../services/authentication/authentication.context";

export const Navigation = ({ onReady }) => {
  const { loggedIn } = useContext(AuthenticationContext);

  return (
    <NavigationContainer onReady={onReady}>
      {loggedIn ? <AppNavigator /> : <AccountNavigator />}
      {/* <AppNavigator /> */}
    </NavigationContainer>
  );
};
