import React, { useState, useRef } from "react";
import { Text, View, Button, TextInput, StyleSheet } from "react-native";

export const UseEffectComponent = () => {
  const [text, setText] = useState(
    "The Quick brown fox jumped over the lazy dog"
  );
  const inputRef = useRef("Initial Value");
  const clearText = () => {
    inputRef.current.clear();
    inputRef.current.focus();
  };
  return (
    <View
      style={{ alignItems: "center", flex: 1, justifyContent: "space-evenly" }}
    >
      <Text>UseEffect Demo</Text>

      <View style={{ flex: 0.25 }}>
        <TextInput
          style={styles.inputBox}
          ref={inputRef}
          onChangeText={(e) => {
            setText(e);
          }}
          value={text}
          multiline={true}
        ></TextInput>

        <Button
          title="Clear Text"
          onPress={() => {
            clearText();
          }}
        ></Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputBox: {
    minWidth: "75%",
    maxWidth: "75%",
    margin: 10,
    borderWidth: 1,
    padding: 10,
  },
});
