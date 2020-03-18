import React from "react";
import { Image } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import Welcome from "../screens/Welcome";
import Browse from "../screens/Browse";
import FilteredRestaurants from "../screens/FilteredRestaurants"

import { theme } from "../constants";

const screens = createStackNavigator(
  {
    Welcome,
    Browse,
    FilteredRestaurants  
  },{defaultNavigationOptions: {
    headerStyle: {
        height: theme.sizes.base * 5,
        backgroundColor: theme.colors.white,
        borderBottomColor: "transparent",
        elevation: 0,
        shadowColor: 'transparent',
      },
  headerBackImage: <Image source={require("../assets/icons/back.png")} />,
  headerBackTitle: ' ',
  headerTitle: ' ',
  headerLeftContainerStyle: {
    alignItems: "center",
    marginLeft: theme.sizes.base * 2,
    paddingRight: theme.sizes.base,
    marginTop: 20,

  },
  }}
);

export default createAppContainer(screens);