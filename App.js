import React from "react";
import { Text, StatusBar } from "react-native";
import styled from "styled-components";
import HomePage from "./App/Screens/HomePage";
import VersesPage from "./App/Screens/VersesPage";

export default function App() {
  return (
    <Container>
      <StatusBar hidden={true} />
      {/*<HomePage />*/}
      <VersesPage />
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  background: white;
`;
