import React, { useState } from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import WelcomeScreen from "../screens/WelcomeScreen";
import Products from "../screens/Products";
import Test from "../screens/Test";
import TabBottomNav from "./TabBottomNav";
import colors from "../configs/";
import TopNav from "./TopNav";
import { Hidden } from "@material-ui/core";

function MyDrawer() {
  const Drawer = createDrawerNavigator();

  return (
    <Drawer.Navigator initialRouteName="welcome">
      <Drawer.Screen
        options={{
          headerShown: false,

        }}
        name="welcome"
        component={TabBottomNav}
      />
      <Drawer.Screen name="test" component={Test} />
      <Drawer.Screen
        name="Shop"
        options={{

          headerShown: false,
        }}
        component={Products}
        initialParams={{ params: { gender: null } }}
      />
    </Drawer.Navigator>
  );
}
export default MyDrawer;
