import { View, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import AppText from "./AppText";
import SizeFilter from "./SizeFilter";
import ColorFilter from "./ColorFilter";
import AppForm from "./AppForm";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { updateBagItem } from "../store/actions";
import EditFormSubmitButton from "./EditFormSubmitButton";
const validationSchema = Yup.object().shape({
  size: Yup.string().required(),
  color: Yup.string().required(),
});
function EditForm({ item, navigation }) {
  const dispatch = useDispatch();

  const handleSubmit = (values) => {
      console.log ('this is the item' , values  )
    dispatch(updateBagItem(values));
    navigation.goBack("bag");
  };
  return (
    <View>
      <AppForm
        initialValues={{
          size: item.size[0],
          color: item.color,
          id : item.id
        }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <View style={styles.priceView}>
          <AppText style={styles.size}>SIZE</AppText>
          <SizeFilter />
        </View>
        <View style={styles.priceView}>
          <AppText style={styles.color}>COLOR</AppText>
          <View style={styles.colorFilter}>
            <ColorFilter />
          </View>
        </View>
        <View style={styles.submit} onPress={handleSubmit}>
         <EditFormSubmitButton handleSubmit={handleSubmit} />
        </View>
      </AppForm>
    </View>
  );
}

export default EditForm;
const styles = StyleSheet.create({
  size: {
    fontWeight: "400",
    fontSize: 24,
    lineHeight: 37.71,
    marginVertical: 20,
  },
  color: {
    fontWeight: "400",
    fontSize: 24,
    lineHeight: 37.71,
    marginVertical: 20,
  },
  priceView: { paddingHorizontal: 10 },
  colorFilter: { marginLeft: -9 },
  submit: {
    position: "absolute",
    top: -295,
    right: 25,
  },
});
