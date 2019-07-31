import React, { Component } from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";
import LoginScreen from "../components/LoginScreen";

const AppNavigator = createStackNavigator(
  {
    Login: { screen: LoginScreen }
    //Details: { screen: DetailsScreen },
  },
  {
    initialRouteName: "Login"
  }
);

const AppContainer = createAppContainer(AppNavigator);

const LoginNavigator = props => {
  return <AppContainer loginStatus={props.loginStatus} />;
};
export default LoginNavigator;
