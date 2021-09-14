import { View, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import AppText from "./AppText";
import colors from "../configs/colors";
function BagBanner({ num }) {
  return (
    <View style={styles.container}>
      <AppText style={styles.items}>
        You have <AppText style={styles.text}>{num} items</AppText> in your
        shopping bag.
      </AppText>
      <TouchableOpacity style={styles.button}>
        <AppText style={styles.buttonText}>CHECKOUT</AppText>
      </TouchableOpacity>
    </View>
  );
}

export default BagBanner;
const styles = StyleSheet.create({
  items: {
    fontWeight: "400",
    fontSize: 20,
    color: colors.gray,
    width : '65%'
  },
  text: {
    fontWeight: "700",
    fontSize: 20,
    color: colors.gold,
  },
  container: {
    width: "100%",
    backgroundColor: colors.white,
    padding: 30,
    flexDirection: "row",
  },
  button: {
    backgroundColor: colors.gold,
    padding: 20,
  },
  buttonText : {
    fontWeight: "700",
    color: colors.white,
    textAlign: "center",
    fontSize: 15,
    letterSpacing : 3 , 
  } , 
});
