import React from "react";
import { View, Text } from "react-native";
import { Avatar } from "react-native-paper";

export const AvatarScreen = () => {
  return (
    <View>
      <View style={{ marginTop: 50, alignContent: "center" }}>
        <Avatar.Image
          size={200}
          source={require("../asssets/avatar.jpg")}
          style={{
            alignContent: "center",
            alignItems: "center",
            justifyContent: "center",
          }}
        />
      </View>
      <Text style={{ fontSize: 50 }}>Avatar Screen</Text>
    </View>
  );
};
