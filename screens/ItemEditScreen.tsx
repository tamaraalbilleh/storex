import React from "react";
import { View, StyleSheet, Text } from "react-native";
import AppText from "../components/AppText";
import TopNav from "../components/TopNav";
import EditItemComponent from "../components/EditItemDisplay";
import colors from "../configs/colors";
import EditForm from "../components/EditForm";
function ItemEditScreen(props) {
  const item = props.route.params.item;
  return (
    <>
      <TopNav />
      <View style={styles.container}>
        <View style={styles.row1}>
          <AppText style={styles.heading}>EDIT ITEM</AppText>
        </View>
        <View>
          <EditItemComponent navigation={props.navigation} item={item} />
        </View>

        <View style={styles.shape}></View>
        <View style={styles.form}>
          <EditForm item={item} navigation={props.navigation} />
        </View>
      </View>
    </>
  );
}

export default ItemEditScreen;
const styles = StyleSheet.create({
  container: {},
  row1: {
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.white,
  },
  heading: {
    letterSpacing: 4,
    fontWeight: "700",
    fontSize: 18,
    color: colors.dark,
  },
  shape: {
    width: 12,
    height: 12,
    backgroundColor: colors.gold,
    transform: [{ rotate: "45deg" }],
    alignSelf: "center",
    position: "absolute",
    top: 95,
  },
  form : {
    backgroundColor : colors.white , 
    borderTopWidth : 1 , 
    borderColor : colors.border,
    borderBottomWidth  : 1 , 
    paddingVertical : 20 ,
    paddingHorizontal : 10 ,  

  }
});
