import React, { Component } from "react";
import {
  Dimensions,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  View
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

import { Card, Badge, Button, Block, Text } from "../components";
import { theme, mocks } from "../constants";

const { width } = Dimensions.get("window");

class FilteredRestaurants extends Component {
  constructor(props) {
    super(props)

    this.state = {
      category: this.props.navigation.state.params.category,
    };
  }

  state = {
    categories: [],
    restaurants: [],
  };

  componentDidMount() {
    this.setState({ 
      restaurants: this.props.restaurants });
  }
  
  render() {
    const { profile, navigation } = this.props;
    const { categories, restaurants } = this.state;

      return (
        <Block style={{backgroundColor: 'white'}}>
           <Block flex={false} row center space="between" style={styles.headerContainer}>
          <Text h1 bold>
            {this.state.category.catTitle}
          </Text>
        </Block>
        </Block>
      );
  }
}

FilteredRestaurants.defaultProps = {
  restaurants: mocks.restaurants
};

export default FilteredRestaurants;

const styles = StyleSheet.create({
  // HEADER BLOCK
  headerContainer: {
    paddingHorizontal: theme.sizes.base * 2,
    backgroundColor: 'white',
    shadowOffset: {
        height: 6,
        width: 0
      },
      shadowColor: "rgba(0,0,0,1)",
      shadowOpacity: 0.1,
      shadowRadius: 20,
      zIndex: 2,
      padding: 20
  },
  avatar: {
    height: theme.sizes.base * 2.2,
    width: theme.sizes.base * 2.2
  },
  // CATEGORY BLOCK  
  categoriesContainer: {
    backgroundColor: 'white',
    shadowOffset: {
        height: 6,
        width: 0
      },
      shadowColor: "rgba(0,0,0,1)",
      shadowOpacity: 0.1,
      shadowRadius: 20,
      paddingTop: 10,
      zIndex: 1,
  },
    // RESTAURANT BLOCK  
  restaurantsContainer: {
    backgroundColor: 'white',
    shadowOffset: {
        height: 6,
        width: 0
      },
      shadowColor: "rgba(0,0,0,1)",
      shadowOpacity: 0.1,
      shadowRadius: 20,
      zIndex: 0,
      paddingTop: 10,
      zIndex: 0,
  },
  // CATEGORY ITEMS
  individualCategoryContainer: {
    marginRight: 10,
    marginBottom: 10
  },
  categoryView: {
    width: 90,
    height: 90,
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 8,
    borderColor: "rgba(208,208,208,1)",
    borderWidth: 1,
    alignItems: 'center'
  },
  categoryImage: {
    width: 60,
    height: 60,
    marginTop: 5,
  },
  categoryText: {
    color: "#121212",
    fontSize: 13,
    textAlign: "center",
    marginTop: 5
  },
  // RESTAURANT ITEMS
  individualRestaurantContainer: {
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 8,
    borderColor: "rgba(208,208,208,1)",
    borderWidth: 1,
    width: '90%',
    height: 80,
    marginTop:10,
    justifyContent: 'center',
  },
  restaurantImage: {
    width: 65,
    height: 65,
    borderRadius: 8,
    marginLeft: 7.5,
    marginRight: 7.5
  },
  restaurantIcon: {
    color: "rgba(255,206,0,1)",
    fontSize: 20,
    marginTop: 8
  },
});