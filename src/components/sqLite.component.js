// Indtall dependency
// expo install expo-sqlite
import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabase(
  {
    name: "db.myReactNativeApp",
    location: "default",
  },
  () => {
    console.log("DB Connected Successfully");
  },
  (error) => {
    console.log("DB connection Error: " + error);
  }
);

export const SQLiteComponent = () => {
  const [data, setData] = useState(null);

  const createTable = () => {
    db.transaction((tx) => {
      console.log("Create table executed");
      tx.executeSql(
        "CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, pass TEXT",
        [],
        (e) => {
          console.log(e);
        },
        (e) => {
          console.log(e);
        }
      );
    });
  };

  const saveData = async () => {
    await db.transaction((tx) => {
      tx.executeSql(
        "INSERT into users VALUES('Vaibhav' , 'Password@012')",
        [],
        (e) => {
          console.log(e);
        },
        (e) => {
          console.log(e);
        }
      );
    });
  };

  const getData = () => {
    db.transaction((tx) => {
      tx.executeSql("SELECT name, pass FROM users", [], (tx, result) => {
        const length = result.rows.length;
        console.log("Length is :" + length);
        console.log("Length is :" + tx);
        if (length > 0) {
          console.log(result.rows.item(0).name);
          console.log(result.rows.item(0).pass);
        }
      });
    });
  };

  useEffect(() => {
    createTable();
  }, []);

  return (
    <View style={styles.container}>
      <Text>This is demo text</Text>
      <Button title="Save data" onPress={saveData}></Button>
      <Button title="Get data" onPress={getData}></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
