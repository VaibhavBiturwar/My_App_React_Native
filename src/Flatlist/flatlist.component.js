import React, { useEffect } from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";

import { MyFlatListFn } from "./MyFlatlist.functional.component";
import { Story } from "./story.flatlist";

export const MyFlatLists = () => {
  return (
    <View style={styles.container}>
      <View style={styles.empContainer}>
        <MyFlatListFn />
      </View>
      <View style={styles.storyContainer}>
        <Story />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight || 0,
    flex: 1,
  },
  empContainer: {
    // flex: 0.6,
    // backgroundColor: "#f0cbf2",
  },
  storyContainer: {
    // flex: 1,
    // backgroundColor: "#84f5c4",
  },
});
