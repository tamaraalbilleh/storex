import React from "react";
import { View, Image, StyleSheet, Text } from "react-native";
import colors from "../configs/colors";
import AppText from "./AppText";
function ListComponent({ item }) {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri:
            item.image ||
            "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png",
        }}
        style={styles.image}
      />
      <View>
        <View style={styles.headerContainer}>
          <AppText style={styles.heading}>{item.name}</AppText>
        </View>
        <View style={styles.priceContainers}>
          <AppText style={styles.oldPrice}>${item.originalPrice}</AppText>

          <AppText style={styles.newPrice}>${item.salePrice}</AppText>
        </View>
      </View>
    </View>
  );
}

export default ListComponent;
const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 20,
    flexDirection: "row",
    marginVertical: 20,
  },
  heading: {
    fontWeight: "400",
    fontSize: 22,
    // lineHeight: 14,
    color: colors.dark,
  },
  oldPrice: {
    marginLeft: 20,
    fontWeight: "400",
    textDecorationLine: "line-through",
    fontSize: 20,
    lineHeight: 32.68,
    color: colors.gray,
  },
  newPrice: {
    marginLeft: 8,
    fontWeight: "700",
    fontSize: 20,
    lineHeight: 32.68,
    color: colors.dark,
  },
  priceContainers: {
    flexDirection: "row",
  },
  image: { width: "40%", height: 180 },
  headerContainer: {
    padding: 20,
    width: 250,
  },
});
