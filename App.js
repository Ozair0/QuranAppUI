import React from "react";
import { Text, StatusBar } from "react-native";
import styled from "styled-components";
import HomePage from "./App/Screens/HomePage";

export default function App() {
  return (
    <Container>
      <StatusBar hidden={true} />
      <HomePage />
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  background: white;
`;
