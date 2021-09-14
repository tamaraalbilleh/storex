import React, { useState } from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import WelcomeScreen from "../screens/WelcomeScreen";
import Products from "../screens/Products";
import Test from "../screens/Test";
import TabBottomNav from "./TabBottomNav";
import colors from "../configs/";
import TopNav from "./TopNav";
import { Hidden } from "@material-ui/core";
import Bag from "../screens/Bag";

function MyDrawer() {
  const Drawer = createDrawerNavigator();

  return (
    <Drawer.Navigator initialRouteName='_' >
      
      <Drawer.Screen
        
        name="test"
        component={Test}
      />
      <Drawer.Screen
        name="bag"
        options={{
          headerShown: false,
        }}
        component={Bag}
      />
      <Drawer.Screen
        options={{
          headerShown: false,
          drawerLabel: '',
        }}
        name="_"
        component={TabBottomNav}
      />

    </Drawer.Navigator>
  );
}
export default MyDrawer;
