import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import Hexagon from "../assets/Shape.svg";
import Outline from "../assets/ShapeOutline.svg";
import colors from "../configs/colors";
import AppText from "./AppText";
import { useFormikContext } from "formik";

function SizeFilterItem({ text }) {
  const { setFieldValue, values } = useFormikContext();

  const handlePress = () => {
    //TODO
    setFieldValue("size", text.toString().toLowerCase());
  };
  return (
    <View>
      {values["size"] === text.toLowerCase() ? (
        <TouchableOpacity style={styles.sizeContainer} onPress={handlePress}>
          <Hexagon width={50} />
          <AppText style={styles.textSelected}>{text}</AppText>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={styles.sizeContainer} onPress={handlePress}>
          <Outline width={50} />
          <AppText style={styles.text}>{text}</AppText>
        </TouchableOpacity>
      )}
    </View>
  );
}

export default SizeFilterItem;
const styles = StyleSheet.create({
  text: {
    fontWeight: "700",

    fontSize: 20,
    lineHeight: 30.17,
    color: colors.gray,
    position: "absolute",
    top: 23,
    alignSelf: "center",
  },
  sizeContainer: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  textSelected: {
    fontWeight: "700",

    fontSize: 20,
    lineHeight: 30.17,
    color: colors.white,
    position: "absolute",
    top: 23,
    alignSelf: "center",
  },
});
