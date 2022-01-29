// yarn add react-native-paper
import React from "react";
import { View, Text } from "react-native";
import { List } from "react-native-paper";

export const MyAccordian = () => {
  return (
    <View style={{ width: "100%" }}>
      <List.Section title="Accordian">
        <List.Accordion
          title="Accordian 1"
          description="This is Accordian Description"
          expanded="false"
          left={(props) => <List.Icon {...props} icon={"phone"} />}
        >
          <List.Item title="Item1"></List.Item>
          <List.Item title="Item2"></List.Item>
          <List.Item title="Item3"></List.Item>
        </List.Accordion>
      </List.Section>
    </View>
  );
};
