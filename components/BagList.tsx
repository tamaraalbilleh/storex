import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import BagListComponent from "./BagListComponent";
function BagList({ bag , handler }) {
  return (
    <View style={styles.container}>
      <FlatList
        style={styles.list}
        data={bag}
        showsHorizontalScrollIndicator={false}
        directionalLockEnabled
        scrollEnabled={true}
        scrollToOverflowEnabled={true}
        snapToStart={false}
        horizontal={false}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <BagListComponent item={item} handler={handler} />}
      />
    </View>
  );
}

export default BagList;
const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 320,
  },
});
