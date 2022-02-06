import React, { useEffect, useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";

import { Avatar } from "react-native-paper";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";

export const Screen1 = ({ navigation }) => {
  var photo = null;
  const [photoUrl, setPhotoUrl] = useState();

  const getPhoto = async () => {
    try {
      photo = await (await AsyncStorage.getItem("dp")).toString();
      if (photo) {
        // console.log("If Photo " + photo);
        setPhotoUrl(photo);
      } else {
        console.log("Photo Not Found");
      }
    } catch (e) {
      console.log("photo load error", e);
    }
  };

  useEffect(() => {
    getPhoto();
  }, [getPhoto]);

  useFocusEffect(() => {
    getPhoto();
  });

  return (
    <View style={styles.cameraContainer}>
      <Text style={styles.headerText}>Access Camera Module</Text>
      <View>
        <Avatar.Image
          size={300}
          source={{
            uri: photoUrl,
          }}
          style={styles.profilePicture}
        />
        <Button
          onPress={() => {
            // console.log(" Clicked");
            navigation.navigate("Screen2");
          }}
          title="Open Camera"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cameraContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  headerText: {
    fontSize: 24,
    fontWeight: "700",
  },
  profilePicture: {
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 25,
  },
});
