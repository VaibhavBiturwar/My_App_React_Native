// expo install firebase

import React, { useEffect, useState } from "react";
import { View, Text, Button } from "react-native";

import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";

export const AuthPage = () => {
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
  const [status, setStatus] = useState("");
  const [newAccountStatus, setNewAccountStatus] = useState("");

  const signIn = () => {
    setStatus("Signing in....");
    setTimeout(() => {
      signInWithEmailAndPassword(auth, "admin@admin.com", "admin@123")
        .then((user) => {
          console.log("user Authenticated");
          setStatus("Signed in Successfully");
        })
        .catch((e) => {
          //   console.log(e);
          //   console.log(e.toString().split("/")[1].split(")")[0]);
          setStatus(
            "Signing Failed: " + e.toString().split("/")[1].split(")")[0]
          );
        });
    }, 5000);
  };

  const signOut = () => {
    auth.signOut().then(() => {
      console.log("Signed Out");
      setStatus("Signed Out");
    });
  };

  const newAccount = () => {
    createUserWithEmailAndPassword(auth, "newuser1@gmail.com", "newuser@123")
      .then(() => {
        console.log("New User Created :");
        setNewAccountStatus("New User Created");
      })
      .catch((e) => {
        console.log("User not created ", e.toString());
        setNewAccountStatus("User not Created");
      });
  };

  useEffect(() => {
    if (auth.currentUser === null) {
      setStatus("Not Signed In");
    }
    // Correct Way
    onAuthStateChanged(auth, (user) => {
      if (!user) {
        console.log("onAuthStateChanged: not logged in");
      }
    });
  }, []);

  return (
    <View>
      <View>
        <Text>Status: {status}</Text>
        <Text>admin@admin.com | admin@123</Text>
        <Button
          onPress={() => {
            signIn();
          }}
          title="Sign In"
        ></Button>

        <Button
          onPress={() => {
            signOut();
          }}
          title="Sign Out"
        ></Button>
      </View>

      <View style={{ marginTop: 50 }}>
        <Text>Create Account</Text>
        <Button
          onPress={() => {
            newAccount();
          }}
          title="Create User"
        ></Button>
        <Text>Status: {newAccountStatus}</Text>
      </View>
    </View>
  );
};
