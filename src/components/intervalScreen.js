import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";

const IntervalExample = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((seconds) => seconds + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <View>
      <Text
        style={{ alignContent: "center", justifyContent: "center", margin: 50 }}
      >
        {seconds} seconds have elapsed since mounting.
      </Text>
    </View>
  );
};

export default IntervalExample;
