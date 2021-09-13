import React from "react";
import { View, StyleSheet } from "react-native";
import Bag from "../assets/bag.svg";
import colors from "../configs/colors";
function NavButton(props) {
  return (
    <View style={styles.container}>
      <Bag width={40} />
    </View>
  );
}

export default NavButton;
const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: -25,
    height: 100,
    width: 100,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.background,

    borderRadius: 50,
    // borderWidth: 3,
    // borderColor: colors.gray,
    shadowColor: colors.shadow,
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowRadius: 6,
    shadowOpacity: 0.7
  },
});
