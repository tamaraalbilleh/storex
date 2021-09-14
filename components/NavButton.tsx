import React from "react";
import { View, StyleSheet } from "react-native";
import Bag from "../assets/bag.svg";
import BagSelected from "../assets/bagSelected.svg";
import colors from "../configs/colors";
import AppText from "./AppText";
import { useSelector } from "react-redux";
import { getBag } from "../store/selector";
import { useNavigation } from "@react-navigation/core";

function NavButton() {
  const navigation = useNavigation().isFocused();
  let sum = 0;
  const number = useSelector(getBag);
  number.map((item) => {
    sum = sum + item.count;
  });
  return (
    <View style={styles.container}>
      {!navigation && <Bag width={40} />}
      {navigation && <BagSelected width={40} />}
      {sum > 0 && (
        <View style={styles.badge}>
          <AppText style={styles.text}>{sum}</AppText>
        </View>
      )}
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
      height: 1,
    },
    shadowRadius: 6,
    shadowOpacity: 0.7,
  },
  badge: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: colors.dark,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: colors.white,
    position: "absolute",
    top: 29,
    right: 26,
  },
  text: {
    color: colors.white,
    alignSelf: "center",
    fontSize: 14,
    marginTop: 1,
    textAlign: "center",
  },
});
