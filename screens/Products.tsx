import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import Banner from "../components/Banner";
import Filter from "../components/Filter";
import TopNav from "../components/TopNav";
import { useDispatch, useSelector } from "react-redux";
import {
  getAll,
  getFemaleWare,
  getMaleWare,
  filterAll,
} from "../store/actions";
import { getProducts, getCatigory } from "../store/selector";
import { FlatList } from "react-native-gesture-handler";
import ListComponent from "../components/listComponent";
import FilterModel from "../components/FilterModel";
import AppText from "../components/AppText";
import colors from "../configs/colors";
function Products(props) {
  let gender = null;
  if (props.navigation.getState().routes[0].params.params.gender)
    gender = props.navigation.getState().routes[0].params.params.gender;
  // const gender = props.navigation.getState().routes[0].params.params.gender || null;
  const dispatch = useDispatch();
  const products = useSelector(getProducts);
  const selected = useSelector(getCatigory);
  const [modalVisible, setModalVisible] = useState(false);
  const getData = () => {
    if (gender === "female") {
      dispatch(getFemaleWare());
      dispatch(filterAll({ catigory: "all", gender: "female" }));
    } else if (gender === "male") {
      dispatch(getMaleWare());
      dispatch(filterAll({ catigory: "all", gender: "male" }));
    } else {
      dispatch(getAll());
      dispatch(filterAll({ catigory: "all", gender: null }));
    }
  };
  useEffect(() => {
    getData();
  }, [gender]);

  const handlePress = () => {
    const newState = modalVisible;
    setModalVisible(!newState);
  };
  const handler = props.navigation;
  return (
    <>
      <TopNav visible={true} onPress={handlePress} handler={handler} />
      <Banner gender={gender} />
      <Filter gender={gender} />
      <View style={styles.container}>
        {products.length === 0 && (
          <AppText style={styles.empty}>No Thing To Show Here</AppText>
        )}
        <FlatList
          style={styles.list}
          data={products}
          showsHorizontalScrollIndicator={false}
          directionalLockEnabled
          scrollEnabled={true}
          scrollToOverflowEnabled={true}
          snapToStart={false}
          horizontal={false}
          keyExtractor={({ item }) => item.id.toString()}
          renderItem={({ item }) => <ListComponent item={item} />}
        />
      </View>
      <View style={styles.modal}>
        <FilterModel modalVisible={modalVisible} onPress={handlePress} />
      </View>
    </>
  );
}

export default Products;
const styles = StyleSheet.create({
  container: {
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  list: {},
  modal: {
    width: "100%",
    height: 50,
  },
  empty: {
    fontSize: 20,
    color: colors.gray,
  },
});
