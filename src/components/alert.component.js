import React from "react";

import { View, Text, Alert, Button } from "react-native";

export const AlertComponent = () => {
  const createTwoButtonAlert = () =>
    Alert.alert("Alert Title", "My Alert Msg", [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      { text: "OK", onPress: () => console.log("OK Pressed") },
    ]);

  const createThreeButtonAlert = () =>
    Alert.alert("Alert Title", "My Alert Msg", [
      {
        text: "Ask me later",
        onPress: () => console.log("Ask me later pressed"),
      },
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      { text: "OK", onPress: () => console.log("OK Pressed") },
    ]);

  return (
    <View
      style={{ alignItems: "center", flex: 1, justifyContent: "space-evenly" }}
    >
      <Text>Alert Component</Text>
      <Button
        title="Two Button Alert"
        onPress={() => {
          createTwoButtonAlert();
        }}
      />
      <Button
        title="Three Button Alert"
        onPress={() => {
          createThreeButtonAlert();
        }}
      />
    </View>
  );
};
