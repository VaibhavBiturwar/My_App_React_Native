import React, { useEffect, useState } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";

const Item = (props) => (
  <View style={styles.item}>
    <Text style={styles.title}>{props.dir.title_display}</Text>
    <Text>Jounral: {props.dir.journal}</Text>
    <Text>Dateed: {props.dir.publication_date.split("T")[0]}</Text>
    <Text>Type: {props.dir.article_type}</Text>
    <Text style={{ paddingBottom: 10 }}>
      Aurthor: {props.dir.author_display[0]}
    </Text>
    <Text>{props.dir.abstract[0]}</Text>
  </View>
);

export const Story = () => {
  const [jsonData, setJsonData] = useState([]);
  useEffect(() => {
    fetch("http://api.plos.org/search?q=title:DNA")
      .then((response) => response.json())
      .then((json) => {
        setJsonData(json.response.docs);
        // console.log(json.response.docs);
      })
      .catch((error) => console.error(error));
  }, []);

  const renderItem = ({ item }) => <Item dir={item} />;

  return (
    <View style={styles.container}>
      <Text style={styles.storyBoard}>Story Board</Text>
      <FlatList
        data={jsonData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  storyBoard: {
    fontSize: 20,
    fontWeight: "bold",
  },
  item: {
    backgroundColor: "#11f291",
    padding: 20,
    marginVertical: 4,
    marginHorizontal: 8,
    alignContent: "center",
    borderRadius: 25,
    borderWidth: 2,
    borderColor: "black",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    paddingBottom: 5,
  },
});
