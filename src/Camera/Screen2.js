import React, { useEffect, useState, useRef } from "react";
import { View, Text, ActivityIndicator, StyleSheet } from "react-native";
import { Colors } from "react-native-paper";

import Icon from "react-native-vector-icons/MaterialIcons";

// expo install expo-camera
import { Camera } from "expo-camera";

import AsyncStorage from "@react-native-async-storage/async-storage";

export const Screen2 = ({ navigation }) => {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.front);
  const [isLoading, setIsLoading] = useState(false);
  const iconSize = 50;

  const CameraRef = useRef();

  const snap = async () => {
    if (CameraRef) {
      const photo = await CameraRef.current.takePictureAsync();
      // console.log(photo);
      await AsyncStorage.setItem("dp", photo.uri);
      setIsLoading(false);
      navigation.goBack();
    }
  };

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <View style={styles.container}>
      <Camera
        type={type}
        ratio={"16:9"}
        style={styles.cameraContainer}
        ref={(camera) => {
          CameraRef.current = camera;
        }}
      />

      <View style={styles.cameraButtons}>
        <Icon
          name="switch-camera"
          size={iconSize}
          color={Colors.white}
          onPress={() => {
            console.log("Pressed");
            type == Camera.Constants.Type.back
              ? setType(Camera.Constants.Type.front)
              : setType(Camera.Constants.Type.back);
          }}
        />
        <Icon
          name="camera"
          size={iconSize}
          color={Colors.white}
          onPress={() => {
            setIsLoading(true);
            snap();
            console.log("Image Captured");
          }}
        />

        <Icon
          name="cancel"
          size={iconSize}
          color={Colors.white}
          onPress={() => {
            console.log("Pressed Cancel");
            navigation.goBack();
          }}
        />
      </View>
      <ActivityIndicator size="large" color="white" animating={isLoading} />
      {isLoading && (
        <View style={{ alignItems: "center" }}>
          <Text
            style={{
              color: "white",
            }}
          >
            Keep Steady
          </Text>
        </View>
      )}
    </View>
  );
};

export default Screen2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  cameraContainer: {
    height: "80%",
    backgroundColor: "white",
  },
  camera: {
    flex: 1,
    height: "100%",
    width: "100%",
    backgroundColor: "yellow",
  },
  cameraButtons: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginHorizontal: 25,
    marginVertical: 20,
  },
});
