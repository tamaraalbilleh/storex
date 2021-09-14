import React from "react";
import { View, StyleSheet, StatusBar } from "react-native";
import AppText from "../components/AppText";
import { useSelector, useDispatch } from "react-redux";
import { getBag } from "../store/selector";
import EmptyBag from "../components/EmptyBag";
import colors from "../configs/colors";
import TopNav from "../components/TopNav";
import BagBanner from "../components/BagBanner";
import BagList from "../components/BagList";
import TotalComponent from "../components/TotalComponent";
function Bag({ navigation }) {
  const dispatch = useDispatch();
  const bag = useSelector(getBag);

  return (
    <>
      <TopNav
        visible={false} handler={navigation}
      />
      <View style={styles.container}>
        {bag.length === 0 && (
          <View style={styles.empty}>
            <EmptyBag />
          </View>
        )}
        {bag.length > 0 && (
          <>
            <View style={styles.banner}>
              <BagBanner num={bag.length} />
            </View>

            <BagList bag={bag} handler={navigation} />
            <TotalComponent bag={bag} />
          </>
        )}
      </View>
    </>
  );
}

export default Bag;
const styles = StyleSheet.create({
  container: {
    padding: 0,
    backgroundColor: colors.white,
    flex: 1,

    alignItems: "center",
  },
  banner: {},
  empty: {alignSelf  :  'center' , flex : 1 , marginTop : '50%' },
});
