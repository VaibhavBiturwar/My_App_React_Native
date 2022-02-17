// goto => https://directory.vercel.app/
// Run command => expo install @expo-google-fonts/roboto
// Run command => expo install @expo-google-fonts/lobster
//  expo install expo-font
import React, { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { useFonts } from "expo-font";
import Apploading from "expo-app-loading";

// expo install expo-app-loading
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

export const CustomFonts = () => {
  const [error, loadedFonts] = useFonts({
    thin: Roboto_100Thin,
    thinItalic: Roboto_100Thin_Italic,
    light: Roboto_300Light,
    lightItalic: Roboto_300Light_Italic,
    regular: Roboto_400Regular,
    regularItalic: Roboto_400Regular_Italic,
    medium: Roboto_500Medium,
    mediumItalic: Roboto_500Medium_Italic,
    bold: Roboto_700Bold,
    boldItalic: Roboto_700Bold_Italic,
    Roboto_900Black,
    Roboto_900Black_Italic,

    lobsterRegular: Lobster_400Regular,
  });

  if (!error) {
    return <Apploading />;
  }

  return (
    <View style={styles.topContainer}>
      <Text>Custom Fonts</Text>
      <Text style={{ fontFamily: "thin" }}>The quick brown fox jumps</Text>
      <Text style={{ fontFamily: "regularItalic" }}>
        The quick brown fox jumps
      </Text>
      <Text style={{ fontFamily: "bold" }}>The quick brown fox jumps</Text>
      <Text style={{ fontFamily: "lobsterRegular" }}>
        The quick brown fox jumps
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  topContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
