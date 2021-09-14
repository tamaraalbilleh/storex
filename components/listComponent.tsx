import React, { useState } from "react";
import { View, Image, StyleSheet, TouchableOpacity } from "react-native";
import colors from "../configs/colors";
import AppText from "./AppText";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useSelector, useDispatch } from "react-redux";
import { addToBag } from "../store/actions";
import { getBag } from "../store/selector";
function ListComponent({ item }) {
  const dispatch = useDispatch();
  const bag = useSelector(getBag);
  const [clicked, setClicked] = useState(false);
  const handlePress = () => {
    let newState = !clicked;
    setClicked(newState);
    dispatch(addToBag(item));
  };
  
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
              color={bag.includes(item) ? colors.gold : colors.gray}
              size={33}
            />
          </TouchableOpacity>
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
});
