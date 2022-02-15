import { setStatusBarNetworkActivityIndicatorVisible } from "expo-status-bar";
import React, { useState } from "react";
import { View, Text, Button } from "react-native";

export const PromiseComponent = () => {
  const [value, setValue] = useState("No Value");
  const generateNumber = () => {
    return new Promise((resolve, reject) => {
      const x = Math.floor(Math.random() * 10);
      if (x < 5) {
        setTimeout(() => {
          reject(x);
        }, 10000);
        // reject(x);
      }
      setTimeout(() => {
        resolve(x);
      }, 5000);
      //   resolve(x);
    });
  };

  const checkNumber = () => {
    generateNumber()
      .then((x) => {
        // console.log(x, " Greater than 5");
        setValue(x + " Greater than 5");
      })
      .catch((x) => {
        // console.log(x, " Less than 5");
        setValue(x + " Less than 5");
      });
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Promise Component</Text>
      <Text>{value}</Text>
      <Button title="Random Guess" onPress={checkNumber}></Button>
    </View>
  );
};
