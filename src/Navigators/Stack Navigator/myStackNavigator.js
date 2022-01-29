import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Screen1 from "./screen1";
import Screen2 from "./screen2";
import Screen3 from "./screen3";

export const MyStackNavigator = () => {
  const HomeStack = createNativeStackNavigator();

  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Screen1" component={Screen1} />
      <HomeStack.Screen name="Screen3" component={Screen3} />
      <HomeStack.Screen name="Screen2" component={Screen2} />
    </HomeStack.Navigator>
  );
};
