import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import AppText from "../components/AppText";
import Banner from "../components/Banner";
import TopNav from "../components/TopNav";
import colors from "../configs/colors";
import { getAll, getFemaleWare, getMaleWare } from "../store/actions";
import { useDispatch } from "react-redux";

function WelcomeScreen({ navigation }) {
  const dispatch = useDispatch();

  return (
    <>
      <TopNav visible={false} handler={navigation} />
      <View style={styles.banner}>
        <AppText style={styles.textLeft}>LAST CHANCE!</AppText>
        <AppText style={styles.text}>Holidy shipping ends soon.</AppText>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("Shop", { params: { gender: null } })
          }
        >
          <AppText style={styles.textRight}>SHOP NOW</AppText>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Shop", { params: { gender: "male" } });
          dispatch(getMaleWare());
        }}
      >
        <Banner gender="male" />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Shop", { params: { gender: "female" } });
          dispatch(getFemaleWare());
        }}
      >
        <Banner gender="female" />
      </TouchableOpacity>
      
      <View style={styles.hero}>
        <AppText style={styles.saleText}>WINTER SALES</AppText>
        <AppText style={styles.saleSupText}>UP TO 60% OFF</AppText>
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: "https://picsum.photos/300/200" }}
            style={styles.image}
          />
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              navigation.navigate("Shop", { params: { gender: null } });
              dispatch(getAll());
            }}
          >
            <AppText style={styles.buttonText}>SHOP NOW</AppText>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  banner: {
    width: "100%",
    height: 80,
    backgroundColor: colors.dark,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 20,
  },
  text: {
    fontWeight: "400",
    color: colors.white,
    fontSize: 16,
    lineHeight: 30.17,
  },
  textLeft: {
    color: colors.gold,
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 30.17,
  },
  textRight: {
    color: colors.gold,
    fontWeight: "700",
    fontSize: 16,
    lineHeight: 30.17,
  },
  hero: {
    backgroundColor: colors.white,
    height: 470,
    // justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "90%",
    height: 220,
  },
  saleText: {
    fontWeight: "600",

    fontSize: 24,
    lineHeight: 30.17,
    marginTop: 15,
  },
  saleSupText: {
    fontWeight: "200",

    fontSize: 36,
    lineHeight: 60.34,
  },
  button: {
    backgroundColor: colors.gold,
    padding: 18,
    paddingHorizontal: 26,
    position: "absolute",

    top: 90,
    right: 0,
  },
  buttonText: {
    color: colors.white,
    fontWeight: "700",

    fontSize: 20,
  },
  imageContainer: {
    width: "100%",
    alignItems: "center",
  },
});
