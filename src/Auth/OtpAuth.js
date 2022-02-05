import React, { useEffect, useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { Button } from "react-native-paper";

// expo install firebase
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPhoneNumber } from "firebase/auth";

import {
  FirebaseRecaptchaVerifierModal,
  FirebaseRecaptchaBanner,
} from "expo-firebase-recaptcha";

export const OtpAuth = () => {
  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBQc3AUaebFevLzg0GMgXTP4K6aqCjikIE",
    authDomain: "myapp-reactnative-8ad4e.firebaseapp.com",
    projectId: "myapp-reactnative-8ad4e",
    storageBucket: "myapp-reactnative-8ad4e.appspot.com",
    messagingSenderId: "957155994486",
    appId: "1:957155994486:web:dedc1997761cf76e1ba857",
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const [otp, setOtp] = useState("");
  const [pNo, setPNo] = useState("");
  const [confirmation, setConfirmation] = useState();
  const [otpButton, setOtpButton] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  const recaptchaVerifier = React.useRef(null);

  const TrySignIn = async () => {
    setOtpButton(true);
    console.log("Trying...");

    const confirmationResult = await signInWithPhoneNumber(
      auth,
      "+91" + pNo.toString(),
      recaptchaVerifier.current
    );
    setConfirmation(confirmationResult);
    console.log("OTP Sent");
  };

  const checkOtp = async () => {
    await confirmation
      .confirm(otp)
      .then((result) => {
        // User signed in successfully.
        console.log(" Successfully signed in");
        console.log(auth.currentUser);

        // ...
      })
      .catch((error) => {
        // User couldn't sign in (bad verification code?)
        console.log("Error logged in");
        // ...
      });
  };

  const displayDetails = () => {
    details = auth.currentUser.providerData[0];
    if (showDetails) {
      setShowDetails(false);
    } else {
      setShowDetails(true);
    }
  };

  return (
    <View style={{ alignItems: "center" }}>
      <Text>OTP Auth</Text>

      <TextInput
        style={styles.inputBox}
        placeholder="Enter Phone Number"
        onChangeText={(e) => {
          setPNo(e);
        }}
      />

      <Button
        disabled={otpButton}
        style={styles.buttonOutline}
        color="#2196F3"
        onPress={() => {
          console.log(pNo.toString());
          TrySignIn();
        }}
      >
        Send OTP
      </Button>

      <TextInput
        style={styles.inputBox}
        placeholder="Enter OTP"
        onChangeText={(e) => {
          setOtp(e);
        }}
      />

      <Button
        style={styles.buttonOutline}
        color="#2196F3"
        onPress={() => {
          checkOtp();
          console.log(otp);
        }}
      >
        Enter Otp
      </Button>

      <Button
        style={styles.buttonSolid}
        color="white"
        onPress={() => {
          displayDetails();
        }}
      >
        Check Details
      </Button>

      {showDetails && (
        <View>
          <Text>Show Details</Text>
          <Text>Display Name: {details.displayName}</Text>
          <Text>Email: {details.email}</Text>
          <Text>Photo URL: {details.photoURL}</Text>
          <Text>Provider Id: {details.providerId}</Text>
          <Text>UId: {details.uid}</Text>
          <Text>Phone Number: {details.phoneNumber}</Text>
        </View>
      )}

      <FirebaseRecaptchaVerifierModal
        ref={recaptchaVerifier}
        firebaseConfig={app.options}
        attemptInvisibleVerification
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputBox: {
    width: "75%",
    margin: 10,
    paddingHorizontal: 15,
    paddingVertical: 7,
    fontSize: 17,
    fontWeight: "700",
    borderColor: "black",
    borderWidth: 3,
    borderRadius: 10,
  },
  buttonOutline: {
    width: "75%",
    margin: 5,
    paddingVertical: 5,
    borderColor: "#2196F3",
    borderWidth: 2,
    borderRadius: 15,
    fontWeight: "700",
  },
  buttonSolid: {
    width: "75%",
    margin: 5,
    paddingVertical: 5,
    borderWidth: 2,
    borderRadius: 15,
    backgroundColor: "#2196F3",
    fontWeight: "700",
  },
});
