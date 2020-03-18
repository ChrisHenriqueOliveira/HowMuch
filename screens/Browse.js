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

class Browse extends Component {
  static navigationOptions = {
    headerBackImage: null
  };
  state = {
    categories: [],
    restaurants: [],
  };

  componentDidMount() {
    this.setState({ 
      categories: this.props.categories,
      restaurants: this.props.restaurants });
  }

  handleTab = tab => {
    const { categories, restaurants } = this.props;
  };

  render() {
    const { profile, navigation } = this.props;
    const { categories, restaurants } = this.state;

    return (
      <Block style={{backgroundColor: 'white'}}>
        <Block flex={false} row center space="between" style={styles.headerContainer}>
          <Text h1 bold>
            Olá Christian,
          </Text>
          <Button onPress={() => navigation.navigate("Settings")}>
            <Image source={profile.avatar} style={styles.avatar} />
          </Button>
        </Block>
        <Block flex={false} column space="between" style={styles.categoriesContainer}>
          <Text h2 bold style={{marginHorizontal: 20, marginBottom: 10}}>
            Categorias
          </Text>     
          <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false} 
                contentContainerStyle={{flexGrow: 1, justifyContent : 'center', paddingLeft: 20, paddingRight: 10}}            
                >
                    {categories.map(category => (
                    <View style={styles.individualCategoryContainer}>
                      <TouchableOpacity
                      onPress={() => navigation.navigate("FilteredRestaurants", {category: category})}>
                        <View style={styles.categoryView}>
                            <Image
                            source={category.catImage}
                            resizeMode="contain"
                            style={styles.categoryImage}
                            ></Image>
                            <Text style={styles.categoryText}>{category.catTitle}</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                    ))}
            </ScrollView> 
        </Block>
        <Block flex={1} column  style={styles.restaurantsContainer}>
          <Text h2 bold style={{marginHorizontal: 20, marginBottom: 0}}>
            Restaurantes
          </Text>     
          <ScrollView
                horizontal={false}
                showsHorizontalScrollIndicator={false} 
                style={{      marginBottom: 10
                }}
                contentContainerStyle={{flexGrow: 1, width: '100%'}}            
                >
                    {restaurants.map(restaurant => (                
                    <View style={{alignItems: 'center'}}>
                            <View style={styles.individualRestaurantContainer}>
                                <TouchableOpacity onPress={() => navigation.navigate("FilteredRestaurants", { restaurant })}>
                                    <View style={{flexDirection: 'row'}}>
                                        <Image
                                        source={restaurant.restImage}
                                        style={styles.restaurantImage}
                                        ></Image>
                                        <View style={{flexDirection: 'column', marginLeft: 10}}>
                                          <Text bold style={{fontSize: 15}}>{restaurant.restTitle}</Text>
                                          <Text gray styles={{fontSize: 13}}>{restaurant.restInfo}</Text>
                                          <View style={{flexDirection: 'row'}}>
                                            <Icon name="star" style={styles.restaurantIcon}></Icon>
                                            <Text style={{color: '#007084', marginLeft: 5, fontSize: 15, marginTop: 10}}>{restaurant.restStars}</Text>
                                          </View>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                          </View>
                      </View>
                    ))}
            </ScrollView> 
        </Block>  
    </Block>
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
      zIndex: 2
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