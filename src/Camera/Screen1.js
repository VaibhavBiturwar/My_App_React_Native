import React, { useEffect } from "react";
import { View, Text, Button, Image } from "react-native";

import { Avatar } from "react-native-paper";

import AsyncStorage from "@react-native-async-storage/async-storage";

export const Screen1 = ({ navigation }) => {
  var photo = null;

  const getPhoto = async () => {
    try {
      photo = await (await AsyncStorage.getItem("dp")).toString();
      if (photo) {
        console.log("If Photo " + photo);
      } else {
        console.log("Else photo " + photo);
      }
    } catch (e) {
      console.log("photo load error", e);
    }
  };

  useEffect(() => {
    getPhoto();
  }, [getPhoto]);

  return (
    <View
      style={{
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text>Access Camera Module</Text>
      <Button
        onPress={() => {
          console.log(" Clicked");
          navigation.navigate("Screen2");
    
        }}
        title="Open Camera"
      />
      {/*       
      {photo && (
        <Avatar.Image
          size={200}
          source={{ uri: photo }}
          style={{
            alignContent: "center",
            alignItems: "center",
            justifyContent: "center",
          }}
        />
      )}
      {!photo && (
        <Avatar.Image
          size={200}
          // source={require("../asssets/avatar.jpg")}
          icon="human"
          style={{
            alignContent: "center",
            alignItems: "center",
            justifyContent: "center",
          }}
        />
      )} */}

      <Avatar.Image
        size={200}
        // source={require("../asssets/avatar.jpg")}
        source={{
          // uri: "file:///data/user/0/host.exp.exponent/cache/ExperienceData/%2540vaibhavbiturwar%252Fmy-app/Camera/647d8efe-3881-491c-a9c4-60f089dcd5a3.jpg",
          uri: photo,
        }}
        style={{
          alignContent: "center",
          alignItems: "center",
          justifyContent: "center",
        }}
      />
    </View>
  );
};
