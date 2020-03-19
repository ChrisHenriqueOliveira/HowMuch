import React, { Component } from "react";
import {
  Animated,
  Dimensions,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  View
} from "react-native";
import RestIcon from "react-native-vector-icons/MaterialIcons";
import SearchIcon from "react-native-vector-icons/FontAwesome";

import { Card, Badge, Button, Block, Text, Input } from "../components";
import { theme, mocks } from "../constants";

const { width } = Dimensions.get("window");

class FilteredRestaurants extends Component {
  constructor(props) {
    super(props)

    this.state = {
      category: this.props.navigation.state.params.category,
      restaurants: [],
      searchString: '',
    };
  }

  componentDidMount() {
    this.setState({
      restaurants: this.props.restaurants,
      searchFocus: new Animated.Value(0.6),
    });
  }

  handleSearchFocus(status) {
    Animated.timing(this.state.searchFocus, {
      toValue: status ? 0.8 : 0.6, // status === true, increase flex size
      duration: 150 // ms
    }).start();
  }

  renderSearch() {
    const { searchString, searchFocus } = this.state;
    const isEditing = searchFocus && searchString;

    return (
      <Block animated middle flex={searchFocus} style={styles.search}>
        <Input
          placeholder="Search"
          placeholderTextColor={theme.colors.gray2}
          style={styles.searchInput}
          onFocus={() => this.handleSearchFocus(true)}
          onBlur={() => this.handleSearchFocus(false)}
          onChangeText={text => this.setState({ searchString: text })}
          value={searchString}
          onRightPress={() =>
            isEditing ? this.setState({ searchString: '' }) : ''
          }
          rightStyle={styles.searchRight}
          rightLabel={
            <SearchIcon name={isEditing ? "close" : "search"}
              size={theme.sizes.base / 1.6}
              color={theme.colors.gray2}
              style={styles.searchIcon}></SearchIcon>
          }
          onSubmitEditing={() => renderRestaurants}
          returnKeyType="search"
        />
      </Block>
    );
  }

  renderRestaurants(){  
     const { restaurants } = this.state;
     
     let aux = null;
     let auxFilter = restaurants.filter(restaurant => restaurant.restCategory === this.state.category.catTitle);

     if (this.state.searchString === '') {
      aux = auxFilter;
      console.log(aux)
     }else {
      aux = restaurants.filter(restaurant => restaurant.restTitle === this.state.searchString);
      console.log(aux)
     }

     return (
      <Block flex={1} column style={styles.restaurantsContainer}>
          <ScrollView
            horizontal={false}
            showsHorizontalScrollIndicator={false}
            style={{
              marginBottom: 10
            }}
            contentContainerStyle={{ flexGrow: 1, width: '100%' }}
          >         
            {aux.map(restaurant => (
              <View key={restaurant.restKey} style={{ alignItems: 'center' }}>
                <View style={styles.individualRestaurantContainer}>
                  <TouchableOpacity onPress={() => navigation.navigate("RestaurantHome", { restaurant: restaurant })}>
                    <View style={{ flexDirection: 'row' }}>
                      <Image
                        source={restaurant.restImage}
                        style={styles.restaurantImage}
                      ></Image>
                      <View style={{ flexDirection: 'column', marginLeft: 10 }}>
                        <Text bold numberOfLines={1} style={{ fontSize: 15 }}>
                          {restaurant.restTitle.length < 20
                            ? `${restaurant.restTitle}`
                            : `${restaurant.restTitle.substring(0, 20)}...`}</Text>
                        <Text gray styles={{ fontSize: 13 }}>{restaurant.restInfo}</Text>
                        <View style={{ flexDirection: 'row' }}>
                          <RestIcon name="star" style={styles.restaurantIcon}></RestIcon>
                          <Text style={{ color: '#007084', marginLeft: 5, fontSize: 15, marginTop: 10 }}>{restaurant.restStars}</Text>
                        </View>
                      </View>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            ))}
          </ScrollView>
        </Block>
    );
  }

  render() {
    const { navigation } = this.props;
    return (
      <Block style={{ backgroundColor: 'white' }}>
        <Block flex={false} row center space="between" style={styles.headerContainer}>
          <Text h1 bold>
            {this.state.category.catTitle}
          </Text>
          {this.renderSearch()}
        </Block>
        {this.renderRestaurants()}
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
  // RESTAURANT ITEMS
  individualRestaurantContainer: {
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 8,
    borderColor: "rgba(208,208,208,1)",
    borderWidth: 1,
    width: '90%',
    height: 80,
    marginTop: 10,
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
  // SEARCH 
  search: {
    height: theme.sizes.base * 2,
    width: width - theme.sizes.base * 2
  },
  searchInput: {
    fontSize: theme.sizes.caption,
    height: theme.sizes.base * 2,
    backgroundColor: "rgba(142, 142, 147, 0.06)",
    borderColor: "rgba(142, 142, 147, 0.06)",
    paddingLeft: theme.sizes.base / 1.333,
    paddingRight: theme.sizes.base * 1.5
  },
  searchRight: {
    top: 0,
    marginVertical: 0,
    backgroundColor: "transparent"
  },
  searchIcon: {
    position: "absolute",
    right: theme.sizes.base / 1.333,
    top: theme.sizes.base / 1.6
  },
});