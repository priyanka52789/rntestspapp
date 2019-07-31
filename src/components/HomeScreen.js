import React, { Component } from "react";

import { StyleSheet, View, Text } from "react-native";

const HomeScreen = props => {
  return (
    <View style={{ padding: 50, flex: 1, backgroundColor: "#f1f1f1" }}>
      <Text>Welcome to HomeScreen</Text>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  body: {
    backgroundColor: "#f1f1f1",
    flex: 1
  }
});
