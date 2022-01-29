import React from "react";
import { View, Text, Button } from "react-native";

export const Screen2 = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>This is Screen 2</Text>
      <Button
        title="Go to Screen 3"
        onPress={() => navigation.navigate("Screen3")}
      />
    </View>
  );
};

export default Screen2;
