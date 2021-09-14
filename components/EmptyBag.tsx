import React from "react";
import { View, StyleSheet } from "react-native";
import Bag from "../assets/bag.svg";
import AppText from "./AppText";
import colors from "../configs/colors";
function EmptyBag() {
  return (
    <View style={styles.banner}>
      <Bag />
      <AppText style={styles.text}>
        You have no items in your shopping bag.
      </AppText>
    </View>
  );
}

export default EmptyBag;
const styles = StyleSheet.create({
  container: {},
  banner: {
    width: 370 ,
    height : 200 , 
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.background,
  },
  text: {
    color: colors.grayFont,
    fontWeight: "400",
    fontSize: 20,
    width : 290 , 
    textAlign : 'center' , 
    marginTop : 30 , 
  },
});
