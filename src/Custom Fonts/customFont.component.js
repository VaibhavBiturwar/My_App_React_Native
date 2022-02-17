import React from "react";
import { Text, StyleSheet } from "react-native";

import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

import { Lobster_400Regular } from "@expo-google-fonts/lobster";

import {
  Roboto_100Thin,
  Roboto_100Thin_Italic,
  Roboto_300Light,
  Roboto_300Light_Italic,
  Roboto_400Regular,
  Roboto_400Regular_Italic,
  Roboto_500Medium,
  Roboto_500Medium_Italic,
  Roboto_700Bold,
  Roboto_700Bold_Italic,
  Roboto_900Black,
  Roboto_900Black_Italic,
} from "@expo-google-fonts/roboto";

export const CustomFontText = (props) => {
  let [fontsLoaded] = useFonts({
    "Inter-SemiBoldItalic":
      "https://rsms.me/inter/font-files/Inter-SemiBoldItalic.otf?v=3.12", // from internet
    "Raleway-Regular": require("../../assets/fonts/Raleway-Regular.ttf"),
    "Raleway-Thin": require("../../assets/fonts/Raleway-Thin.ttf"),
    "Helvetica-Bold": require("../../assets/fonts/Helvetica-Bold.ttf"),
    "Helvetica-Light": require("../../assets/fonts/helvetica-light.ttf"),

    "Roboto-Thin": Roboto_100Thin,
    "Roboto-Light": Roboto_300Light,
    Roboto: Roboto_400Regular,
    "Roboto-Black": Roboto_900Black,

    lobster: Lobster_400Regular,
  });

  const setFontType = (type) => {
    switch (type) {
      case "body":
        return "Helvetica-Bold";
      case "heding":
        return "Raleway-Regular";
      case "content":
        return "Inter-SemiBoldItalic";
      case "thin":
        return "Raleway-Thin";
      case "light":
        return "Helvetica-Light";
      case "Rthin":
        return "Roboto-Thin";
      case "Rlight":
        return "Roboto-Light";
      case "Rblack":
        return "Roboto-Black";
      case "lobster":
        return "lobster";
    }
  };
  const font = setFontType(props.type ? props.type : "normal");
  const style = [
    {
      fontFamily: font,
    },
    props.style || {},
  ];
  const allProps = Object.assign({}, props, { style: style });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return <Text {...allProps}>{props.children}</Text>;
};

const styles = StyleSheet.create({});
