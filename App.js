import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

// local imports
import IntervalExample from "./src/components/intervalScreen";
import TimeoutScreen from "./src/components/timeoutScreen";
import MyActivityIndicator from "./src/components/activityIndicator";
import {
  PressableButton,
  TouchWithoutFeedbackButton,
  TouchableOpacityButton,
} from "./src/components/myButtons";
import { MyAccordian } from "./src/components/accordian.component";
import { MyMapView } from "./src/components/maps.component";

import { PersistentStorage } from "./src/components/persistentStorage";

import { NavigationContainer } from "@react-navigation/native";
import { MyTabNavigator } from "./src/Navigators/Tab Navigator/myTabNavigator";
import { MyStackNavigator } from "./src/Navigators/Stack Navigator/myStackNavigator";

import { AuthPage } from "./src/Auth/AuthPage";

import { AvatarScreen } from "./src/components/avatar";

import { MyLottieAnimation } from "./src/components/lottieAnimation";

import { MyImageBackground } from "./src/components/imageBackground";

import { CameraModule } from "./src/Camera/CameraModule";

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      {/* <Text style={styles.headerText}>Component goes Here</Text> */}
      {/* <TimeoutScreen /> */}
      {/* <IntervalExample /> */}

      {/* <MyActivityIndicator /> */}

      {/* <PressableButton /> */}
      {/* <TouchWithoutFeedbackButton /> */}
      {/* <TouchableOpacityButton /> */}

      {/* <MyAccordian /> */}
      {/* <MyMapView /> */}
      {/* <PersistentStorage /> */}

      {/* <AuthPage /> */}

      {/* <AvatarScreen /> */}

      <MyLottieAnimation />

      {/* <MyImageBackground /> */}

      {/* <NavigationContainer>
        <CameraModule />
      </NavigationContainer> */}
    </View>
  );

  // Navigation Container should be at the top most level.
  // return (
  //   <>
  //     <NavigationContainer>
  //       {/* <MyTabNavigator /> */}
  //       <MyStackNavigator />
  //     </NavigationContainer>
  //   </>
  // );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    margin: 200,
  },
  headerText: {
    fontSize: 20,
  },
});
