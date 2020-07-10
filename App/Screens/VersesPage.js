import React from "react";
import styled from "styled-components";
import { View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function VersesPage() {
  return (
    <Container>
      <FirstContainer>
        <SubView>
          <Ionicons name="ios-menu" size={40} color="#B0ACC5" />
          <Title>Quran App</Title>
        </SubView>
        <Ionicons name="md-search" size={40} color="#B0ACC5" />
      </FirstContainer>
      <SecondContainer>
        <GreetingText>Asslamualaikum</GreetingText>
        <NameText>Ozair Farahi</NameText>
        <LastReadVerse>
          <VerseInfo>
            <LastReadView>
              <Ionicons name="ios-book" size={25} color="white" />
              <LastReadText>Last Read</LastReadText>
            </LastReadView>
            <VerseName>Al-Fatiah</VerseName>
            <AyahNum>Ayah No: 1</AyahNum>
          </VerseInfo>
          <QuranImage
            resizeMode={"contain"}
            source={require("../../assets/Quran.png")}
          />
        </LastReadVerse>
      </SecondContainer>
      <VersesList>
        <Toolbar>
          <SurahText>Surah</SurahText>
          <ParaText>Para</ParaText>
          <PageText>Page</PageText>
          <HijbText>Hijb</HijbText>
        </Toolbar>
        <Line>
          <Selected></Selected>
        </Line>
        <Virse>
          <SubVirse>
            <Ionicons name="ios-star-outline" size={30} color="#8F68D5" />
            <VerseAllInfo>
              <SurahName>Al-Fatiah</SurahName>
              <SurahInfo>MECCAN . 7 VERSES</SurahInfo>
            </VerseAllInfo>
          </SubVirse>
          <VerseArabicName>الْفَاتِحَة</VerseArabicName>
        </Virse>
        <Separator></Separator>

        <Virse>
          <SubVirse>
            <Ionicons name="ios-star-outline" size={30} color="#8F68D5" />
            <VerseAllInfo>
              <SurahName>Al-Fatiah</SurahName>
              <SurahInfo>MECCAN . 7 VERSES</SurahInfo>
            </VerseAllInfo>
          </SubVirse>
          <VerseArabicName>الْفَاتِحَة</VerseArabicName>
        </Virse>
        <Separator></Separator>

        <Virse>
          <SubVirse>
            <Ionicons name="ios-star-outline" size={30} color="#8F68D5" />
            <VerseAllInfo>
              <SurahName>Al-Fatiah</SurahName>
              <SurahInfo>MECCAN . 7 VERSES</SurahInfo>
            </VerseAllInfo>
          </SubVirse>
          <VerseArabicName>الْفَاتِحَة</VerseArabicName>
        </Virse>
        <Separator></Separator>
        <Virse>
          <SubVirse>
            <Ionicons name="ios-star-outline" size={30} color="#8F68D5" />
            <VerseAllInfo>
              <SurahName>Al-Fatiah</SurahName>
              <SurahInfo>MECCAN . 7 VERSES</SurahInfo>
            </VerseAllInfo>
          </SubVirse>
          <VerseArabicName>الْفَاتِحَة</VerseArabicName>
        </Virse>
      </VersesList>

      {/*<TabBar>*/}
      {/*  <Ionicons*/}
      {/*    style={{ padding: 10, backgroundColor: "#EDE9F8", borderRadius: 50 }}*/}
      {/*    name="ios-book"*/}
      {/*    size={40}*/}
      {/*    color="#662DBC"*/}
      {/*  />*/}
      {/*  <Ionicons*/}
      {/*    style={{*/}
      {/*      padding: 10,*/}
      {/*      backgroundColor: "#662DBC",*/}
      {/*      borderRadius: 50,*/}
      {/*      bottom: 25,*/}
      {/*    }}*/}
      {/*    name="ios-bookmarks"*/}
      {/*    size={40}*/}
      {/*    color="#F6B093"*/}
      {/*  />*/}
      {/*  <Ionicons*/}
      {/*    style={{ padding: 10, backgroundColor: "#EDE9F8", borderRadius: 50 }}*/}
      {/*    name="ios-home"*/}
      {/*    size={40}*/}
      {/*    color="#662DBC"*/}
      {/*  />*/}
      {/*</TabBar>*/}
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  margin-left: 30px;
  margin-right: 30px;
`;
const FirstContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 30px;
`;
const SubView = styled.View`
  flex-direction: row;
  align-items: center;
`;

const Title = styled.Text`
  font-size: 22px;
  margin-left: 30px;
  font-weight: bold;
  color: #6a2db9;
`;

const SecondContainer = styled.View`
  margin-top: 30px;
`;

const LastReadVerse = styled.View`
  width: 100%;
  height: 140px;
  margin-top: 30px;
  background: #672cbc;
  border-radius: 15px;
  flex-direction: row;
  justify-content: space-between;
  overflow: hidden;
`;

const GreetingText = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #a6a0b7;
`;

const NameText = styled.Text`
  font-size: 25px;
  font-weight: bold;
  color: #200b4d;
`;
const VerseInfo = styled.View`
  margin-left: 15px;
  margin-top: 15px;
`;
const LastReadView = styled.View`
  flex-direction: row;
  align-items: center;
`;
const LastReadText = styled.Text`
  margin-left: 15px;
  font-size: 15px;
  font-weight: bold;
  color: white;
`;
const VerseName = styled.Text`
  margin-top: 10px;
  font-size: 20px;
  font-weight: bold;
  color: white;
`;
const AyahNum = styled.Text`
  font-size: 15px;
  font-weight: 500;
  color: #d5abfa;
  margin-top: 10px;
`;

const QuranImage = styled.Image`
  width: 200px;
  top: 30px;
  left: 30px;
`;

const VersesList = styled.View``;
const Toolbar = styled.View`
  margin-top: 25px;
  flex-direction: row;
  justify-content: space-around;
`;
const SurahText = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #7a52b9;
`;
const ParaText = styled.Text`
  font-size: 20px;
  color: #b0afc5;
  font-weight: 500;
`;
const PageText = styled.Text`
  font-size: 20px;
  color: #b0afc5;
  font-weight: 500;
`;
const HijbText = styled.Text`
  font-size: 20px;
  color: #b0afc5;
  font-weight: 500;
`;
const Line = styled.View`
  height: 5px;
  width: 100%;
  margin-top: 10px;
  background: #f5f5f5;
  border-radius: 25px;
  overflow: hidden;
`;
const Selected = styled.View`
  height: 5px;
  width: 25%;
  background: #7a52b9;
`;

const Virse = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 20px;
`;
const SubVirse = styled.View`
  flex-direction: row;
  align-items: center;
`;
const VerseAllInfo = styled.View`
  margin-left: 20px;
`;
const SurahName = styled.Text`
  font-size: 20px;
  color: #322455;
  font-weight: bold;
`;
const SurahInfo = styled.Text`
  font-size: 13px;
  color: #9f9baf;
  font-weight: 500;
`;
const VerseArabicName = styled.Text`
  align-self: center;
  font-size: 20px;
  color: #9a69c7;
  font-weight: bold;
`;

const Separator = styled.View`
  width: 100%;
  height: 4px;
  background: #f5f5f5;
  margin-top: 15px;
`;
const TabBar = styled.View`
  margin-top: 40px;
  flex-direction: row;
  justify-content: space-around;
  width: 90%;
  align-self: center;
`;
