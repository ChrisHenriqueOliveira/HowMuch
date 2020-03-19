import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import Icon from "react-native-vector-icons/Ionicons";

import Welcome from "../screens/Welcome";
import Browse from "../screens/Browse";
import FilteredRestaurants from "../screens/FilteredRestaurants";
import RestaurantHome from "../screens/RestaurantHome";

import { theme } from "../constants";

const screens = createStackNavigator(
  {
    Welcome,
    Browse,
    FilteredRestaurants,
    RestaurantHome
  },{defaultNavigationOptions: {
    headerStyle: {
        height: theme.sizes.base * 6,
        backgroundColor: theme.colors.white,
        borderBottomColor: "transparent",
        elevation: 0,
        shadowColor: 'transparent',
      },
  headerBackImage:<Icon name="ios-arrow-back" style={{color: 'gray', fontSize: '30'}}></Icon>,
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