import { React, useEffect, useState } from "react";
import { View, ActivityIndicator } from "react-native";

const MyActivityIndicator = () => {
  const [animate, setAnimate] = useState(true);
  useEffect(() => {
    setTimeout(() => setAnimate(false), 10000);
  }, []);

  return <ActivityIndicator size="large" color="red" animating={animate} />;
};

export default MyActivityIndicator;
