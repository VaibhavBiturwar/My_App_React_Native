// yarn add react-native-credit-card-input

import React from "react";
import { View, Text, StyleSheet } from "react-native";
import {
  LiteCreditCardInput,
  CreditCardInput,
} from "react-native-credit-card-input";

export const CreditCard = () => {
  const onChange = (formData) => {
    const { status, valid, values } = formData;
    // console.log(formData);
    const isIncomplete = Object.values(status).includes("incomplete");
    if (!isIncomplete) {
      const card = {
        cvc: values.cvc,
        expiry: values.expiry,
        number: values.number,
        type: values.type,
        valid: valid,
      };
      console.log("Card is Valid: " + card.valid);
      console.log("CVV: " + card.cvc);
      console.log("Expiry: " + card.expiry);
      console.log("Number: " + card.number);
      console.log("Type: " + card.type);
      //   console.log(status + " " + valid + " " + values + " " + isIncomplete);
    }
  };

  return (
    <View style={styles.topContainer}>
      <Text>Credit Card Input</Text>
      <LiteCreditCardInput onChange={onChange} />
      {/* <CreditCardInput onChange={onChange} /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  topContainer: {
    flex: 0.5,

    justifyContent: "space-between",
    alignItems: "center",
    padding: 50,
    marginTop: 250,
  },
});
