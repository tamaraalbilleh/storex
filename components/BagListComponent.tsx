import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import colors from "../configs/colors";
import AppText from "./AppText";
import Edit from "react-native-vector-icons/Feather";
function BagListComponent({ item, handler }) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri:
            item.image ||
            "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png",
        }}
      />
      <View style={styles.rightContainer}>
        <AppText style={styles.heading}>{item.name}</AppText>
        <View style={styles.priceContainers}>
          <AppText style={styles.oldPrice}>${item.originalPrice}</AppText>
          <AppText style={styles.newPrice}>${item.salePrice}</AppText>
          <View
            style={[styles.color, { backgroundColor: colors[item.color] }]}
          ></View>
          <AppText style={styles.size}>{item.size[0].toUpperCase()}</AppText>
          <TouchableOpacity
            style={styles.icon}
            onPress={()=>handler.push("edit", { item: item })}
          >
            <Edit name="edit" size={33} color={colors.gray} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default BagListComponent;
const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: colors.white,
    borderTopWidth: 1,
    borderColor: colors.border,
    paddingRight: 30,
    flexDirection: "row",
  },
  image: {
    width: 160,
    height: 160,
  },
  heading: {
    fontWeight: "400",
    width: 220,
    fontSize: 16,
    marginLeft: 10,
    color: colors.dark,
  },
  rightContainer: {
    justifyContent: "center",
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
    marginRight: 8,
  },
  priceContainers: {
    flexDirection: "row",
    marginLeft: -10,
  },
  icon: {
    position: "absolute",
    right: -10,
    top: -20,
  },
  size: {
    marginLeft: 15,
    alignSelf: "center",
    marginBottom: 2,
    fontSize: 25,
    color: colors.dark,
  },
  color: {
    width: 12,
    height: 12,
    //   backgroundColor : colors.gold ,
    transform: [{ rotate: "45deg" }],
    marginLeft: 4,
    alignSelf: "center",
    marginBottom: 2,
  },
});
