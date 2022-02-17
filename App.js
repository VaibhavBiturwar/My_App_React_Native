import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";

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
import { OtpAuth } from "./src/Auth/OtpAuth";

import { AvatarScreen } from "./src/components/avatar";

import { MyLottieAnimation } from "./src/components/lottieAnimation";

import { MyImageBackground } from "./src/components/imageBackground";

import { CameraModule } from "./src/Camera/CameraModule";

import { MyFlatLists } from "./src/Flatlist/flatlist.component";

import { AlertComponent } from "./src/components/alert.component";

import { UseEffectComponent } from "./src/components/useEffect.component";

import { PromiseComponent } from "./src/components/promise.component";

import { CreditCard } from "./src/components/creditCard";

import { CustomFonts } from "./src/Custom Fonts/customFonts";
import { LocalFont } from "./src/Custom Fonts/localFonts";
import { CustomFontText } from "./src/Custom Fonts/customFont.component";

export default function App() {
  return (
    <View style={styles.container}>
      {/* // <View style={styles.containerWithoutPadding}> */}
      <StatusBar />
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

      {/* <MyLottieAnimation /> */}

      {/* <MyImageBackground /> */}

      {/* <NavigationContainer>
        <CameraModule />
      </NavigationContainer> */}

      {/* <MyFlatLists /> */}

      {/* <OtpAuth /> */}

      {/* <AlertComponent /> */}

      {/* <UseEffectComponent /> */}

      {/* <PromiseComponent /> */}

      {/* <CreditCard /> */}

      {/* <CustomFonts /> */}
      <LocalFont />
      {/* <CustomFontText>This is a demo Text</CustomFontText> */}
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
    marginTop: 20,
    padding: 10,
  },
  containerWithoutPadding: {
    flex: 1,
  },
});
