import React from "react";
import { Text, StyleSheet } from "react-native";

import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

export const CustomFontText = (props) => {
  let [fontsLoaded] = useFonts({
    "Inter-SemiBoldItalic":
      "https://rsms.me/inter/font-files/Inter-SemiBoldItalic.otf?v=3.12", // from internet
    "Raleway-Regular": require("../../assets/fonts/Raleway-Regular.ttf"),
    "Raleway-Thin": require("../../assets/fonts/Raleway-Thin.ttf"),
    "Helvetica-Bold": require("../../assets/fonts/Helvetica-Bold.ttf"),
    "Helvetica-Light": require("../../assets/fonts/helvetica-light.ttf"),
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
