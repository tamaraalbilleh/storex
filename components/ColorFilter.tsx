import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import Black from "../assets/Black.svg";
import Red from "../assets/Red.svg";
import Blue from "../assets/Blue.svg";
import Green from "../assets/Green.svg";
import Purble from "../assets/Purble.svg";
import { useFormikContext } from "formik";
import colors from "../configs/colors";

function ColorFilter() {
  const { setFieldValue, values } = useFormikContext();

  return (
    <View style={styles.shell}>
      <TouchableOpacity
        onPress={() => setFieldValue("color", "black")}
      >
        <Black
          fill={values["color"] === "black" ? colors.gold : "white"}
          style={styles.image}
          width={55}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setFieldValue("color", "red")}>
        <Red
          fill={values["color"] === "red" ? colors.gold : "white"}
          style={styles.image}
          width={55}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setFieldValue("color", "blue")}>
        <Blue
          fill={values["color"] === "blue" ? colors.gold : "white"}
          style={styles.image}
          width={55}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setFieldValue("color", "green")}>
        <Green
          fill={values["color"] === "green" ? colors.gold : "white"}
          style={styles.image}
          width={55}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setFieldValue("color", "purble")}>
        <Purble
          style={styles.image}
          width={55}
          fill={values["color"] === "purble" ? colors.gold : "white"}
        />
      </TouchableOpacity>
    </View>
  );
}

export default ColorFilter;
const styles = StyleSheet.create({
  shell: { flexDirection: "row" },
  inner: {},
  image: {
    marginHorizontal: 5,
  },
  selected: {
    backgroundColor: colors.gold,
    borderColor: colors.gold,
    margin: 0,
    // borderWidth: 1,
    borderRadius: 50,
    opacity: 0.1,
  },
});
