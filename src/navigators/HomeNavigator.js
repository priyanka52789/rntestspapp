import React, { Component } from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";
import HomeScreen from "../components/HomeScreen";
import DetailsScreen from "../components/DetailsScreen";

const AppNavigator = createStackNavigator(
  {
    Home: { screen: HomeScreen },
    Details: { screen: DetailsScreen }
  },
  {
    initialRouteName: "Home"
  }
);

const AppContainer = createAppContainer(AppNavigator);

const HomeNavigator = props => {
  return <AppContainer loginStatus={props.loginStatus} />;
};
export default HomeNavigator;
