import React from "react";

import { View, FlatList, StyleSheet } from "react-native";

import colors from "../configs/colors";
import FilterComponent from "./FilterComponent";
import { useSelector} from "react-redux";
import { getCatigory } from "../store/selector";

function Filter({ gender }) {
  const selected = useSelector(getCatigory);
  return (
    <View style={styles.slider}>
      <FlatList
        contentContainerStyle={styles.row}
        showsHorizontalScrollIndicator={false}
        style={styles.list}
        horizontal
        data={selected}
        renderItem={({ item }) => (
          <FilterComponent
            gender={gender}
            style={styles.text}
            item={item}
            selected={item.selected}
          />
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

export default Filter;
const styles = StyleSheet.create({
  slider: {
    width: "100%",
    alignItems: "center",
    backgroundColor: colors.background,
    paddingVertical: 27,
    justifyContent: "center",
    alignSelf: "flex-start",
  },
  list: {
    width: "100%",
  },
  text: {
    marginHorizontal: 12,
    fontSize: 20,
    fontWeight: "400",
  },
  row: {
    alignSelf: "flex-start",
    paddingLeft: 30,
  },
});
