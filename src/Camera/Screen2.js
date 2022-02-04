import React, { useEffect, useState, useRef } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Button } from "react-native";

// expo install expo-camera
import { Camera } from "expo-camera";

import AsyncStorage from "@react-native-async-storage/async-storage";

export const Screen2 = ({ navigation }) => {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);

  const CameraRef = useRef();

  const snap = async () => {
    if (CameraRef) {
      const photo = await CameraRef.current.takePictureAsync();
      console.log(photo);
      await AsyncStorage.setItem("dp", photo.uri);
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
      <TouchableOpacity
        onPress={() => {
          console.log("Image");
          snap();
        }}
        style={styles.container}
      >
        <Camera
          type={Camera.Constants.Type.back}
          style={styles.cameraContainer}
          ref={(camera) => {
            CameraRef.current = camera;
          }}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Screen2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    backgroundColor: "lightblue",
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
});

/*

<Camera style={styles.camera} type={type}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
              );
            }}
          >
            <Text style={styles.text}> Flip </Text>
          </TouchableOpacity>
        </View>
      </Camera>


*/
