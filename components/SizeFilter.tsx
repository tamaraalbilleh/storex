import { StylesContext } from "@material-ui/styles";
import React from "react";
import { View, StyleSheet } from "react-native";
import SizeFilterItem from "./SizeFilterItem";
const sizes = ["XS", "S", "M", "L", "XL", "XXL"];
import { useFormikContext } from "formik";

function SizeFilter() {
  const { setFieldValue, values } = useFormikContext();
  console.log(values);
  return (
    <View style={styles.container}>
      {sizes.map((item) => {
        return (
          <SizeFilterItem
            text={item}
            
            // onPress={() => setFieldValue("size", "xs")}
          />
        );
      })}
    </View>
  );
}

export default SizeFilter;
const styles = StyleSheet.create({
  container: { flexDirection: "row", marginTop: -14, marginBottom: 12 },
});
