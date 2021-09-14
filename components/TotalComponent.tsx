import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import colors from "../configs/colors";
import AppText from "./AppText";
function TotalComponent({ bag }) {
  const [subTotal, setSubTotal] = useState(0);
  const [shipping, setShipping] = useState(10);

  useEffect(() => {
    let sum = 0;
    bag.map((item) => {
      sum = sum + parseInt(item.salePrice);
    });
    setSubTotal(sum);
  }, [bag]);
  return (
    <>
      <View style={styles.container}>
        <View style={styles.row1}>
          <AppText style={styles.totals}>Subtotal</AppText>
          <AppText style={styles.totals}>${subTotal}</AppText>
        </View>
        <View style={styles.row2}>
          <AppText style={styles.totals}>Shipping</AppText>
          <AppText style={styles.totals}>${shipping}</AppText>
        </View>
      </View>
      <View style={styles.container2}>
        <View style={styles.row3}>
          <AppText style={styles.totals2}>Total</AppText>
          <AppText style={styles.totals2}>${shipping + subTotal}</AppText>
        </View>
      </View>
    </>
  );
}

export default TotalComponent;
const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: colors.background,
    height: 120,
    borderTopWidth: 1,
    borderColor: colors.border,
    justifyContent: "center",
    padding: 20,
  },
  container2: {
    width: "100%",
    borderTopWidth: 1,
    backgroundColor: colors.background,
    height: 160,
    borderColor: colors.border,
    justifyContent: "center",
    padding: 20,
  },
  row1: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 12,
  },
  row2: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  totals: {
    color: colors.gray,
    fontSize: 20,
    fontWeight: "400",
  },
  row3: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  totals2 : {
    color: colors.dark,
    fontSize: 30,
    fontWeight: "400",
    top : -30  ,
  } , 

});
