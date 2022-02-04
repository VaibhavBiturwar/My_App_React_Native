import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Screen1 } from "./Screen1";
import { Screen2 } from "./Screen2";

export const CameraModule = () => {
  const HomeStack = createNativeStackNavigator();
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Screen1" component={Screen1} />
      <HomeStack.Screen name="Screen2" component={Screen2} />
    </HomeStack.Navigator>
  );
};
