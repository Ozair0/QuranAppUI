import React from "react";
import styled from "styled-components";
import { TouchableOpacity } from "react-native";

export default function HomePage() {
  return (
    <Container>
      <Title>Quran App</Title>
      <SubTitle>Learn Quran And{"\n"}Recite once everyday</SubTitle>
      <SubContainer>
        <QuranImage
          resizeMode={"contain"}
          source={require("../../assets/Quran.png")}
        />
        <TouchableOpacity>
          <GetStartedText>Get Started</GetStartedText>
        </TouchableOpacity>
      </SubContainer>
    </Container>
  );
}

const Container = styled.View`
  justify-content: center;
  align-items: center;
`;
const Title = styled.Text`
  font-size: 30px;
  font-weight: bold;
  margin-top: 90px;
  color: #6a2db9;
`;
const SubTitle = styled.Text`
  font-size: 20px;
  margin-top: 20px;
  color: #adacbe;
  text-align: center;
`;
const SubContainer = styled.View`
  background: #672cbc;
  margin-top: 30px;
  width: 80%;
  height: 500px;
  border-radius: 30px;
  justify-content: flex-end;
`;

const GetStartedText = styled.Text`
  padding: 20px 40px;
  background: #f9b090;
  align-self: center;
  border-radius: 50px;
  color: white;
  font-size: 18px;
  font-weight: bold;
  top: 30px;
`;

const QuranImage = styled.Image`
  align-self: center;
  bottom: 50px;
  width: 95%;
  height: 40%;
`;
