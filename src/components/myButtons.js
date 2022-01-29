import React, { useState } from "react";
import {
  Pressable,
  Text,
  View,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from "react-native";

export const PressableButton = () => {
  const [currentState, setCurrentState] = useState("None");
  return (
    <View>
      <Pressable
        onPress={() => {
          setCurrentState("onPress");
        }}
        onPressIn={() => {
          setCurrentState("onPressIn");
        }}
        onPressOut={() => {
          setCurrentState("onPressOut");
        }}
      >
        <Text>!!!!!</Text>
      </Pressable>

      <Text>{currentState}</Text>
    </View>
  );
};

export const TouchWithoutFeedbackButton = () => {
  const [count, setCount] = useState(0);
  return (
    <View>
      <TouchableWithoutFeedback
        onPress={() => {
          setCount(count + 1);
        }}
      >
        <View style={{ height: 30, width: 50, backgroundColor: "red" }}>
          <Text>{count}</Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export const TouchableOpacityButton = () => {
  const [count, setCount] = useState(0);
  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          setCount(count + 1);
        }}
      >
        <View style={{ height: 30, width: 50, backgroundColor: "red" }}>
          <Text>{count}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
