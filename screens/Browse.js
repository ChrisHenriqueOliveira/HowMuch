import React, { Component } from "react";
import {
  Dimensions,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  View,
  TouchableWithoutFeedback,
  Keyboard,
  StatusBar,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

import { Divider } from 'react-native-elements'

import { Card, Badge, Button, Block, Text, Input } from "../components";
import { theme, mocks } from "../constants";
import { SafeAreaView } from "react-native-safe-area-context";

const { width, height } = Dimensions.get("window");
const DismissKeyboard = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);
class Browse extends Component {

  constructor(props) {
    super(props)

    this.state = {
      restaurants: [],
      categories: [],
      searchString: '',
    };
  }

  static navigationOptions = {
    headerShown: false,
    gesturesEnabled: false,
  };
  state = {
    categories: [],
    restaurants: [],
  };



  componentDidMount() {
    this.setState({
      categories: this.props.categories,
      restaurants: this.props.restaurants
    });
  }

  render() {
    const { searchString, searchFocus } = this.state;
    const { profile, navigation } = this.props;
    const { categories, restaurants } = this.state;
    const isEditing = searchFocus && searchString;


    return (
      <DismissKeyboard>
        <View style={styles.container}>
          <StatusBar
            barStyle='dark-content'
          />
          <View style={styles.header}>
            <View style={styles.headerLine}>
              <Text style={styles.headerTitle}>Olá Christian,</Text>
              <Image source={profile.avatar} style={styles.headerAvatar} />
            </View>
            <View style={styles.searchBar}>
              <Input placeholder="Search restaurants"
                placeholderTextColor={'gray'}
                style={styles.searchInput}
                onChangeText={text => this.setState({ searchString: text })}
                value={searchString}
                rightStyle={styles.searchRight}
                rightLabel={
                  <Icon name={"search"}
                    size={theme.sizes.base / 1.6}
                    color={theme.colors.gray2}
                    style={styles.searchIcon}></Icon>
                }
                onSubmitEditing={() => renderRestaurants}
                returnKeyType="search"
              />
            </View>
          </View>
          <View style={{ flex: 0.17}}>
            <View style={{ flex: 0.15, justifyContent: 'center', marginBottom: 10 }}>
              <Text style={{ paddingHorizontal: 20, fontSize: 20, fontFamily: 'Poppins-Black' }}>CATEGORIAS</Text>
            </View>
            <View style={{ flex: 0.85, justifyContent: 'center' }}>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', paddingLeft: 20, paddingRight: 10, marginTop: 10 }}
              >
                {categories.map(category => (

                  <View key={category.catKey} style={styles.individualCategoryContainer}>
                    <TouchableOpacity
                      onPress={() => navigation.navigate("FilteredRestaurants", { category: category })}>
                      <View style={styles.categoryView}>
                        <Image
                          source={category.catImage}
                          resizeMode="contain"
                          style={styles.categoryImage}
                        ></Image>
                        <Text numberOfLines={1} style={styles.categoryText}>{category.catTitle}</Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                ))}
              </ScrollView>
            </View>
          </View>
          <View style={{
            flex: 0.63, backgroundColor: 'white', borderRadius: 25, shadowOffset: {
              height: 2,
              width: 0
            },
            shadowColor: "rgba(0,0,0,1)",
            shadowOpacity: 0.5,
            shadowRadius: 5,
          }}>
            <View style={{ flex: 1, justifyContent: 'center'}}>
              <ScrollView
                horizontal={false}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}
              >
                <Text style={{ paddingHorizontal: 20, fontSize: 20, fontWeight: 'bold', marginTop: 10, fontFamily: 'Poppins-Black' }}>RESTAURANTES</Text>
                {restaurants.map(restaurant => (
                  <View key={restaurant.retKey} style={{ alignItems: 'center', paddingHorizontal: 20 }}>
                    <View style={styles.individualRestaurantContainer}>
                      <TouchableOpacity onPress={() => navigation.navigate("RestaurantHome", { restaurant: restaurant })}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                          <Image
                            source={restaurant.restImage}
                            style={styles.restaurantImage}
                          ></Image>
                          <View style={{ flexDirection: 'column', marginLeft: 10 }}>
                            <Text bold numberOfLines={1} style={{ fontSize: 16, fontFamily: 'Poppins-Bold' }}>
                              {restaurant.restTitle.length < 20
                                ? `${restaurant.restTitle}`
                                : `${restaurant.restTitle.substring(0, 20)}...`}</Text>
                            <Text bold numberOfLines={1} style={{ fontSize: 14, fontFamily: 'Poppins-Regular' }}>{restaurant.restInfo}</Text>
                            <View style={{ flexDirection: 'row' }}>
                              <Icon name="star" style={styles.restaurantIcon}></Icon>
                              <Text style={{ color: '#007084', marginLeft: 5, fontSize: 15, marginTop: 10 }}>{restaurant.restStars}</Text>
                            </View>
                          </View>
                        </View>

                      </TouchableOpacity>
                      <Divider style={{ marginTop: 5 }}></Divider>

                    </View>
                  </View>
                ))}
              </ScrollView>
            </View>
          </View>
        </View>
      </DismissKeyboard>

    );
  }
}

Browse.defaultProps = {
  profile: mocks.profile,
  categories: mocks.categories,
  restaurants: mocks.restaurants
};

export default Browse;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#91C6DC',
  },
  header: {
    flex: 0.22,
  },
  headerAvatar: {
    height: theme.sizes.base * 2.2,
    width: theme.sizes.base * 2.2,
    backgroundColor: '#91C6DC'
  },
  headerLine: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 60,
    paddingHorizontal: 20
  },
  headerTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    fontFamily: 'Poppins-Bold'
  },
  avatar: {
    height: theme.sizes.base * 2.2,
    width: theme.sizes.base * 2.2,
    backgroundColor: '#91C6DC'
  },
  searchBar: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 15

  },
  searchInput: {
    fontSize: 14,
    fontFamily: 'Poppins-Light',
    height: theme.sizes.base * 2.2,
    backgroundColor: "white",
    borderColor: "white",
    paddingLeft: theme.sizes.base / 1.333,
    paddingRight: theme.sizes.base * 1.5,
    width: width * 0.9,
    borderRadius: 8
  },
  searchRight: {
    top: 0,
    marginVertical: 0,
    backgroundColor: "transparent"
  },
  searchIcon: {
    position: "absolute",
    right: theme.sizes.base / 1,
    top: theme.sizes.base / 1.3,
    color: 'gray'
  },
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
    paddingHorizontal: 5,
    fontFamily: 'Poppins-Light'
  },
  individualRestaurantContainer: {
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 8,
    borderColor: "rgba(208,208,208,1)",
    width: '100%',
    height: 80,
    marginTop: 10,
    justifyContent: 'center',
  },
  restaurantImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
  },
  restaurantIcon: {
    color: "rgba(255,206,0,1)",
    fontSize: 20,
    marginTop: 8
  }
});