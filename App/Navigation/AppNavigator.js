import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import HomePage from "../Screens/HomePage";
import VersesPage from "../Screens/VersesPage";
const Tab = createBottomTabNavigator();

const AppNavigator = () => (
  <Tab.Navigator
    tabBarOptions={{
      style: {
        backgroundColor: "white",
        borderTopWidth: 0,
        borderTopColor: null,
        elevation: 0,
      },
    }}
  >
    <Tab.Screen
      name="Home"
      component={HomePage}
      options={{
        tabBarLabel: "",
        tabBarIcon: ({ focused, size, color }) => (
          <MaterialCommunityIcons
            name="book"
            size={focused ? size + 20 : size + 5}
            color={focused ? "#F6B093" : "#662DBC"}
            style={{
              backgroundColor: focused ? "#662DBC" : "#EDE9F8",
              padding: 10,
              borderRadius: 50,
              left: 15,
              bottom: focused ? 15 : 0,
            }}
          />
        ),
      }}
    />
    <Tab.Screen
      name="Verses"
      component={VersesPage}
      options={() => ({
        tabBarLabel: "",
        tabBarIcon: ({ focused, size, color }) => (
          <MaterialCommunityIcons
            name="book-search"
            size={focused ? size + 20 : size + 5}
            color={focused ? "#F6B093" : "#662DBC"}
            style={{
              backgroundColor: focused ? "#662DBC" : "#EDE9F8",
              padding: 10,
              borderRadius: 50,
              bottom: focused ? 15 : 0,
            }}
          />
        ),
      })}
    />
    <Tab.Screen
      name="VerseDetail"
      component={HomePage}
      options={{
        tabBarLabel: "",
        tabBarIcon: ({ focused, size, color }) => (
          <MaterialCommunityIcons
            name="book-open"
            size={focused ? size + 20 : size + 5}
            color={focused ? "#F6B093" : "#662DBC"}
            style={{
              backgroundColor: focused ? "#662DBC" : "#EDE9F8",
              padding: 10,
              borderRadius: 50,
              right: 15,
              bottom: focused ? 15 : 0,
            }}
          />
        ),
      }}
    />
  </Tab.Navigator>
);

export default AppNavigator;
