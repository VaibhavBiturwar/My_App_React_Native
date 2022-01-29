import React, { useState, useRef, useEffect } from "react";
import { View, Text, TextInput, FlatList, Button } from "react-native";
// expo install @react-native-async-storage/async-storage
import AsyncStorage from "@react-native-async-storage/async-storage";

export const PersistentStorage = () => {
  const [taskList, setTaskList] = useState([]);
  const [task, setTask] = useState();
  const myTextInputValue = useRef();

  const onSaveTask = async () => {
    try {
      await AsyncStorage.setItem("Task", JSON.stringify(taskList));
    } catch (e) {
      console.log("onSave ", e);
    }
  };

  onLoadTask = async () => {
    try {
      const list = await AsyncStorage.getItem("Task");
      if (list && JSON.parse(list).length > 0) {
        setTaskList(JSON.parse(list));
      }
    } catch (e) {
      console.log("onLoad", e);
    }
  };

  useEffect(() => {
    onLoadTask();
  }, []);

  useEffect(() => {
    onSaveTask();
  }, [taskList]);

  const taskItem = ({ item }) => {
    return (
      <View>
        <Text key={Math.random(1).toString}>{item}</Text>
      </View>
    );
  };

  const onSubmitClear = () => {
    setTask("");
  };
  return (
    <View
      style={{
        flex: 1,
        width: "100%",
        alignContent: "center",
        justifyContent: "center",
      }}
    >
      <Text style={{ marginTop: 70 }}>Persistent Storage</Text>
      <Button
        title="Clear"
        onPress={() => {
          setTaskList([]);
        }}
      >
        Clear
      </Button>
      <TextInput
        ref={myTextInputValue}
        value={task}
        style={{
          height: 40,
          color: "white",
          backgroundColor: "black",
          margin: 5,
          borderColor: "black",
          borderWidth: 1,
        }}
        clearTextOnFocus
        onSubmitEditing={({ nativeEvent }) => {
          setTaskList([...taskList, nativeEvent.text]);
          // console.log(taskList, "dfsfjsfsjfsfs", nativeEvent.text);
          onSubmitClear();
        }}
        onChangeText={(newText) => setTask(newText)}
        // onFocus={({ nativeEvent }) => {
        //   setTask("");
        // }}
      ></TextInput>

      <FlatList data={taskList} renderItem={taskItem}></FlatList>
    </View>
  );
};
