import React from "react";
import { View, StatusBar, StyleSheet, TouchableOpacity } from "react-native";
import FilterIcon from "react-native-vector-icons/AntDesign";
import MenuIcon from "react-native-vector-icons/Feather";
import colors from "../configs/colors";
import Logo from "../assets/Logo.svg";

function TopNav({ visible, onPress , handler }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={()=>handler.toggleDrawer()}>
        <MenuIcon name="menu" size={35} color={colors.dark} />
      </TouchableOpacity>
      <View>
        <Logo width={120} height={40} />
      </View>

      <TouchableOpacity onPress={onPress}>
        {visible ? (
          <FilterIcon name="filter" size={35} color={colors.dark} />
        ) : (
          <View style={styles.iconPlace} />
        )}
      </TouchableOpacity>
    </View>
  );
}

export default TopNav;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginTop: StatusBar.currentHeight + 34,
    backgroundColor: colors.background,
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
  },
  logo: {
    backgroundColor: colors.dark,
    height: "100%",
    width: 100,
  },
  iconPlace: {
    width: 35,
    height: 35,
  },
});
