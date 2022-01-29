// yarn add @react-navigation/bottom-tabs
// yarn add @react-navigation/native
// Add this dependency
// for error | yarn add react-native-safe-area-view react-native-safe-area-context

import React from "react";
import { View, Text, Button } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";

import Screen1 from "./screen1";
import Screen2 from "./screen2";
import Screen3 from "./screen3";

const Tab = createBottomTabNavigator();

const HomeScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Home!</Text>
      <Button
        title="Go to Settings"
        onPress={() => navigation.navigate("Settings")}
      />
    </View>
  );
};

export const MyTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused
              ? "ios-information-circle"
              : "ios-information-circle-outline";
          } else if (route.name === "Settings") {
            iconName = "ios-list";
          } else if (route.name === "Feeds") {
            iconName = "apps";
          } else if (route.name === "Homescreen") {
            iconName = "home";
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "blue",
        tabBarInactiveTintColor: "black",
      })}
    >
      <Tab.Screen
        name="Home"
        component={Screen1}
        options={{ tabBarBadge: 3 }}
      />
      <Tab.Screen name="Feeds" component={Screen2} />
      <Tab.Screen name="Settings" component={Screen3} />
      <Tab.Screen name="Homescreen" component={HomeScreen} />
    </Tab.Navigator>
  );
};

export default MyTabNavigator;
