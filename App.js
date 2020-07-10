import React from "react";
import { StatusBar } from "react-native";
import styled from "styled-components";
import { NavigationContainer } from "@react-navigation/native";
import AppNavigator from "./App/Navigation/AppNavigator";
import MyDefaultTheme from "./App/Navigation/MyDefaultTheme";

export default function App() {
  return (
    <Container>
      <StatusBar hidden={true} />
      <NavigationContainer theme={MyDefaultTheme}>
        <AppNavigator />
      </NavigationContainer>
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  background: white;
`;
