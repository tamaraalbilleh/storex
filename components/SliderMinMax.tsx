import React from "react";
import { View, Input, StyleSheet } from "react-native";
import MultiSlider from "@ptomasroos/react-native-multi-slider";
import Handle from "../assets/Handle.svg";
import colors from "../configs/colors";
import { useFormikContext } from "formik";

function SliderMinMax({ multiSliderValuesChange }) {
  const { setFieldValue } = useFormikContext();
  const handleChange = (values) => {
    multiSliderValuesChange(values);
    setFieldValue("price", values);
  };
  return (
    <View style={styles.container}>
      <MultiSlider
        selectedStyle={styles.slider}
        values={[30, 250]}
        sliderLength={300}
        min={0}
        max={300}
        step={10}
        onValuesChange={(value) => handleChange(value)}
        customMarker={() => <Handle width={30} style={styles.handle} />}
      />
    </View>
  );
}

export default SliderMinMax;
const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: "10%",
  },
  handle: {
    shadowColor: colors.dark,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.17,
    shadowRadius: 4.65,
  },
  slider: {
    backgroundColor: colors.gold,
  },
});
