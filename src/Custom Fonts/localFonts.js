import React from "react";
import { View, Text, StyleSheet } from "react-native";

import { CustomFontText } from "./customFont.component";

export const LocalFont = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <CustomFontText type="body" style={{ fontSize: 25 }}>
        This is a Body text
      </CustomFontText>
      <CustomFontText type="heading">This is a Heading text</CustomFontText>
      <CustomFontText type="content">This is a Content text</CustomFontText>
      <CustomFontText type="thin">This is a Thin text</CustomFontText>
      <CustomFontText type="light">This is a light text</CustomFontText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
