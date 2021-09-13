import React from "react";
import { View, Text } from "react-native";
import Shop from "../assets/Shop.svg";
import Inspiration from "../assets/Location.svg";
import Locations from "../assets/locations.svg";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import More from "react-native-vector-icons/FontAwesome5";
import colors from "../configs/colors";
import WelcomeScreen from "../screens/WelcomeScreen";
import Products from "..//screens/Products";
import NavButton from "../components/NavButton";
import { Setting, Home } from "../screens/Test";
const Tab = createBottomTabNavigator();

export default function TabBottomNav() {
  return (
    <>
      <Tab.Navigator
        initialRouteName="welcome"
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            height: 110,
            backgroundColor: colors.background,
            borderTopWidth: 1,
            borderColor: "#C4C4C4",
            paddingTop: 12,
          },
          tabBarActiveTintColor: colors.dark,
          tabBarInactiveTintColor: colors.gray,
          tabBarLabelStyle: { fontSize: 15, marginTop: 9 },
        }}
      >
        <Tab.Screen
          options={{
            tabBarIcon: () => <Shop width={40} />,
          }}
          name="Shop"
          component={Products}
          initialParams={{ params: { gender: null } }}
        />

        <Tab.Screen
          options={{
            tabBarIcon: () => <Inspiration width={40} />,
          }}
          name="Inspiration"
          component={Setting}
        />

        <Tab.Screen
          options={{
            tabBarIcon: ({ color }) => <NavButton width={30} />,
            tabBarLabel: "",
          }}
          name="welcome"
          component={WelcomeScreen}
        />
        <Tab.Screen
          options={{
            tabBarIcon: ({ color }) => <Locations width={30} />,
          }}
          name="Shops"
          component={Home}
        />
        <Tab.Screen
          options={{
            tabBarIcon: ({ color }) => (
              <More name="ellipsis-h" color={color} size={35} />
            ),
          }}
          name="More"
          component={Setting}
        />
      </Tab.Navigator>
    </>
  );
}
