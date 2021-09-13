import React from "react";
import { TouchableOpacity, StyleSheet, Text, View } from "react-native";
import colors from "../configs/colors";
import { useDispatch } from "react-redux";

import { filterAll, getAll } from "../store/actions";
function FilterComponent({ item, style, gender, selected }) {
  const dispatch = useDispatch();

  const handlePress = () => {
    if (item.title === "all") {
      dispatch(getAll());
      dispatch(filterAll({ catigory: item.title, gender: gender }));
    } else {
      dispatch(filterAll({ catigory: item.title, gender: gender }));
    }
  };

  return (
    <View>
      <TouchableOpacity onPress={handlePress}>
        <Text
          style={[
            styles.text,
            style,
            {
              color:
                gender === "male" && selected
                  ? colors.blue
                  : gender === "female" && selected
                  ? colors.pink
                  : gender === null && selected ? colors.gold : colors.black,
            },
          ]}
        >
          {item.display}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

export default FilterComponent;
const styles = StyleSheet.create({
  text: {},
});
