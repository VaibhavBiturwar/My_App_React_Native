import React from "react";
import { Text, View } from "react-native";
// expo install lottie-react-native
import LottieView from "lottie-react-native";

export const MyLottieAnimation = () => {
  return (
    <View style={{ width: "100%", height: "100%" }}>
      <LottieView
        key="animation"
        autoPlay
        loop
        resizeMode="cover"
        source={require("../asssets/animate.json")}
      />

      <Text
        style={{
          position: "absolute",
          top: "5%",
          left: "5%",
          color: "lightgreen",
          fontSize: 50,
        }}
      >
        Lottie Animation
      </Text>
    </View>
  );
};
