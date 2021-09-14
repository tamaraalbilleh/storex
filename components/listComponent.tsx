import React, { useState } from "react";
import { View, Image, StyleSheet, TouchableOpacity } from "react-native";
import colors from "../configs/colors";
import AppText from "./AppText";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useSelector, useDispatch } from "react-redux";
import { addToBag, removeFromBag } from "../store/actions";
import { getBag } from "../store/selector";

function ListComponent({ item }) {
  const dispatch = useDispatch();
  const bag = useSelector(getBag);
  const handlePress = () => {
    dispatch(addToBag(item));
  };
  const handleRemove =(item) => {
    dispatch(removeFromBag(item));

  }
  const count = bag.filter((product) => product.name === item.name);
  let display = count.length > 0 ? true : false;
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
          <TouchableOpacity onPress={handlePress}>
            <Icon
              name="cart-plus"
              color={count.length > 0 ? colors.gold : colors.gray}
              size={30}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>handleRemove (item)}>
            <Icon
              name="cart-minus"
              color={count.length > 0 ? colors.gold : colors.gray}
              size={30}
            />
          </TouchableOpacity>
        </View>
        { display && <AppText style={styles.count}>Count : {count[0].count }</AppText>}
        <View style={styles.pulsMinusContainer}></View>
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
    marginRight: 8,
  },
  priceContainers: {
    flexDirection: "row",
  },
  image: { width: "40%", height: 180 },
  headerContainer: {
    padding: 20,
    width: 250,
  },
  plus: {
    width: 20,
    height: 30,
    position: "absolute",
    top: 5,
  },
  count: {
    marginHorizontal: 20,
    marginTop: 10,
    color: colors.dark,
    fontSize: 20,
  },
  pulsMinusContainer: {
    flexDirection: "row",
    alignSelf: "flex-start",
    marginRight: 40,
    marginTop: 20,
  },
});
