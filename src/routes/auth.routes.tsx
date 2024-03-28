import React from "react";
import { Login } from "../screens/Auth/Login";
import { createStackNavigator } from "@react-navigation/stack";
import { Welcome } from "../screens/Auth/Welcome";

const { Navigator, Screen } = createStackNavigator();

export function AuthRoutes() {
  return (
    <Navigator
      initialRouteName="Welcome"
      screenOptions={{ headerShown: false }}
    >
      <Screen name="Welcome" component={Welcome} />

      <Screen name="Login" component={Login} />
    </Navigator>
  );
}
