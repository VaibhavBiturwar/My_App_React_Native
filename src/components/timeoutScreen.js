import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";

const TimeoutScreen = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setSeconds(500000000000);
    }, 5000);
  }, []);

  return (
    <View>
      <Text
        style={{ alignContent: "center", justifyContent: "center", margin: 50 }}
      >
        {seconds} will be updated after 5 seconds
      </Text>
    </View>
  );
};

export default TimeoutScreen;
