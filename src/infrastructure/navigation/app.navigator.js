import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { View, Text } from "react-native";
import { colors } from "../theme/colors";
import { Ionicons } from "@expo/vector-icons";
import SocialNavigator from "./social.navigator";
import HomeNavigator from "./home.navigator";
import ProfileNavigator from "./profile.navigator";

const Tab = createMaterialBottomTabNavigator();

const TAB_ICON = {
  Home: "home",
  People: "md-people",
  Profile: "person-sharp",
};

const createScreenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name];
  return {
    tabBarIcon: ({ color, size = 24 }) => (
      <Ionicons name={iconName} size={size} color={color} />
    ),
  };
};

export default function AppNavigator() {
  return (
    <Tab.Navigator
      screenOptions={createScreenOptions}
      labeled={false}
      activeColor={colors.brand.primary}
      inactiveColor={colors.brand.muted}
      barStyle={{
        position: "relative",
        backgroundColor: colors.bg.primary,

        borderTopWidth: 1,
        borderTopColor: colors.ui.tertiary,
      }}
    >
      <Tab.Screen name="Home" component={HomeNavigator} />
      <Tab.Screen name="People" component={SocialNavigator} />
      <Tab.Screen name="Profile" component={ProfileNavigator} />
    </Tab.Navigator>
  );
}
