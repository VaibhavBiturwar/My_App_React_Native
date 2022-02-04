import React, { useEffect, useState } from "react";

import { StyleSheet, FlatList, StatusBar, View, Text } from "react-native";

const Item = (props) => (
  <View style={styles.item}>
    <Text style={{ fontSize: 20, fontWeight: "normal" }}>
      {props.id} <Text style={styles.title}>{props.name}</Text>
    </Text>

    <Text style={styles.content}>Email: {props.email}</Text>
    <Text style={styles.content}>Phone: {props.phone}</Text>
    <Text style={styles.content}>Website: {props.website}</Text>
    <Text style={styles.content}>
      Address:
      {props.address.street}, {props.address.suite}, {props.address.city},
    </Text>
    <Text style={styles.content}>Zipcode: {props.address.zipcode}</Text>
    <Text style={{ fontSize: 15, fontWeight: "bold" }}>Company</Text>
    <Text style={styles.content}>Name: {props.company.name}</Text>
    <Text style={styles.content}>{props.company.catchPhrase}</Text>
    <Text style={styles.content}>BS: {props.company.bs}</Text>
  </View>
);

export const MyFlatListFn = () => {
  const [jsonData, setJsonData] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/")
      .then((response) => response.json())
      .then((json) => {
        setJsonData(json);
        // console.log(jsonData);
      })
      .catch((error) => console.error(error));
  }, []);

  const renderItem = ({ item }) => (
    <Item
      id={item.id}
      name={item.name}
      email={item.email}
      phone={item.phone}
      website={item.website}
      address={item.address}
      company={item.company}
    />
  );

  return (
    <FlatList
      style={styles.ftList}
      data={jsonData}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      horizontal
    />
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 5,
    marginHorizontal: 7,
    alignContent: "center",
  },
  title: {
    fontSize: 20,
  },

  content: {
    fontSize: 15,
    marginVertical: 5,
  },
  ftList: {
    marginVertical: 5,
  },
});
