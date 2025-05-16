import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Row = ({ name, phone }) => {
  return (
    <View style={styles.row}>
      <Text>{name}</Text>
      <Text>{phone}</Text>
    </View>
  );
};

export default Row;

const styles = StyleSheet.create({
    row: {
        margin: 20,
        borderWidth: 1,
        width: '80%',
        padding: 10,
        borderRadius: 10,
        borderColor: "black",
        alignItems: "center",
    }
});
