import { View, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import AppText from "./AppText";
import colors from "../configs/colors";
import { useFormikContext } from "formik";

function SubmitButton() {
  const { handleSubmit } = useFormikContext();
  return (
    <TouchableOpacity
      style={styles.button}
       onPress={handleSubmit}
    >
      <AppText style={styles.text}>APPLY FILTERS</AppText>
    </TouchableOpacity>
  );
}

export default SubmitButton;
const styles = StyleSheet.create({
  button: {
    width: "100%",
    backgroundColor: colors.gold,
    padding: 25,
  },
  text: {
    fontWeight: "700",
    color: colors.white,
    textAlign: "center",
    fontSize: 30,
    lineHeight: 37.71,
  },
});
