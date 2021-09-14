import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import colors from "../configs/colors";
import AppText from "./AppText";

function Banner({ gender }) {
  const genderStyle = () => {
    if (gender === "female") {
      return styles.container;
    } else if (gender === "male") {
      return styles.container2;
    }
    return styles.container3;
  };
  return (
    <View style={genderStyle}>
      {gender && (
        <AppText style={styles.text}>
          {gender === "female" ? "WOMEN" : "MEN"}
        </AppText>
      )}
      {gender && <AppText style={styles.subText}>OUTWEAR</AppText>}
      {!gender && <AppText style={styles.sale}>WINTER SALE</AppText>}
      {!gender && <AppText style={styles.saleSub}>UP TO 60% OFF</AppText>}
    </View>
  );
}

export default Banner;
const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: colors.pink,
    justifyContent: "center",
    alignItems: "center",
    height: 125,
    padding: 20,
  },
  container2: {
    width: "100%",
    backgroundColor: colors.blue,
    justifyContent: "center",
    alignItems: "center",
    height: 125,
    padding: 20,
  },
  text: {
    color: colors.white,
    fontSize: 70,
    fontWeight: "200",
    marginBottom: -10,
  },
  subText: {
    color: colors.white,
    fontSize: 33,
    fontWeight: "300",
  },
  container3: {
    width: "100%",
    backgroundColor: colors.white,
    justifyContent: "flex-end",
    alignItems: "flex-end",
    height: 125,
    padding: 20,
  },
  sale: {
    fontWeight: "700",
    fontSize: 18,
    lineHeight: 25.14,
    textAlign: "center",
    marginRight: 42,
  },
  saleSub: {
    fontWeight: "300",

    fontSize: 32,
    lineHeight: 52.79,
  },
});
