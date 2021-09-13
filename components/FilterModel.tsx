import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import Modal from "react-native-modal";
import colors from "../configs/colors";
import AppText from "./AppText";
import ColorFilter from "./ColorFilter";
import SizeFilter from "./SizeFilter";
import SubmitButton from "./SubmitButton";
import SliderMinMax from "./SliderMinMax";
import AppForm from "./AppForm";
import * as Yup from "yup";
import { filterSpecial } from "../store/actions";
import { useDispatch } from "react-redux";

const validationSchema = Yup.object().shape({
  price: Yup.array().length(2).label("Price"),
  size: Yup.string(),
  color: Yup.string().label("Color"),
});

function FilterModel({ modalVisible, onPress }) {
  const [minMax, setMinMax] = useState([30, 250]);
  const dispatch = useDispatch();

  const handleChange = (values) => {
    setMinMax(values);
  };
  const close = () => {
    onPress();
  };
  const handleSubmit = (values) => {
    console.log(values);
    dispatch(filterSpecial(values));
    close();
  };
  return (
    <Modal
      isVisible={modalVisible}
      backdropColor={colors.dark}
      backdropOpacity={0.7}
      animationIn="slideInUp"
      onSwipeComplete={close}
      onBackdropPress={close}
      swipeDirection={["down"]}
      animationOut="slideOutDown"
      animationInTiming={600}
      animationOutTiming={600}
      backdropTransitionInTiming={600}
      backdropTransitionOutTiming={600}
      style={styles.container}
    >
      <AppForm
        initialValues={{
          price: [30, 250],
          size: "s",
          color: "blue",
        }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <View style={styles.modalContainer}>
          <View style={styles.priceView}>
            <AppText style={styles.price}>
              FILTER BY PRICE (${minMax[0]} - ${minMax[1]})
            </AppText>
            <SliderMinMax multiSliderValuesChange={handleChange} />
          </View>
          <View style={styles.priceView}>
            <AppText style={styles.size}>FILTER BY SIZE</AppText>
            <SizeFilter />
          </View>
          <View style={styles.priceView}>
            <AppText style={styles.color}>FILTER BY COLOR</AppText>
            <ColorFilter />
          </View>
          <View style={styles.submit}>
            <SubmitButton />
          </View>
        </View>
      </AppForm>
    </Modal>
  );
}

export default FilterModel;
const styles = StyleSheet.create({
  container: { justifyContent: "flex-end", margin: 0 },
  modalContainer: {
    flex: 0.66,
    backgroundColor: "white",
    // justifyContent: "space-evenly", alignItems: "flex-start",

    opacity: 0.9,
  },
  price: {
    fontWeight: "400",
    fontSize: 24,
    lineHeight: 37.71,
    marginVertical: 24,
  },
  size: {
    fontWeight: "400",
    fontSize: 24,
    lineHeight: 37.71,
    marginVertical: 24,
  },
  color: {
    fontWeight: "400",
    fontSize: 24,
    lineHeight: 37.71,
    marginVertical: 24,
  },
  submit: {
    width: "100%",
    bottom: 1,
    position: "absolute",
  },
  priceView: { paddingHorizontal: 20 },
});
