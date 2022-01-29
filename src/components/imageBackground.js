import React from "react";
import { Text, View, ImageBackground, StyleSheet } from "react-native";

export const MyImageBackground = () => {
  const image = {
    // uri: "../asssets/photo.jpeg",
    uri: "https://images.unsplash.com/photo-1643203025680-4efddc506fae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  };
  return (
    <View>
      <ImageBackground source={image} resizeMode="cover" style={styles.ImgBG}>
        <View style={styles.fadedBG}>
          <View style={styles.container}></View>
          <Text>This is ImageBaground</Text>
          <Text>This is ImageBaground</Text>
          <Text>This is ImageBaground</Text>
          <Text>This is ImageBaground</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  ImgBG: {
    width: "100%",
    height: "100%",
  },
  fadedBG: {
    position: "absolute",
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(255,255,255,0.2)",
  },
  container: {
    backgroundColor: "rgba(255,255,255,0.7)",
  },
});
