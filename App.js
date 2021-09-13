import "react-native-gesture-handler";

import React from "react";
import { View, Text } from "react-native";
import Products from "./screens/Products";
import { NavigationContainer } from "@react-navigation/native";
import WelcomeScreen from "./screens/WelcomeScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabBottomNav from "./components/TabBottomNav";
import MyDrawer from "./components/DrawerNav";
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="welcome"
      >
        {/* <Stack.Screen name="welcome" component={WelcomeScreen} /> */}

        <Stack.Screen name="Login" component={MyDrawer} />
      </Stack.Navigator>
    </NavigationContainer>
    // <Products gender={null}/>
  );
}
