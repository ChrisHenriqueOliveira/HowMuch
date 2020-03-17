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
import CategoriesBlock from "../components/CategoriesBlock";
import RestaurantBlock from "../components/RestaurantsBlock";

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
          <Text h2 bold style={{marginHorizontal: theme.sizes.base * 2, marginBottom: 10}}>
            Categorias
          </Text>     
          <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false} 
                contentContainerStyle={{flexGrow: 1, justifyContent : 'center'}}            
                >
                    {categories.map(category => (
                    <CategoriesBlock {...category}></CategoriesBlock>
                    ))}
            </ScrollView> 
        </Block>
        <Block flex={1} column  style={styles.restaurantsContainer}>
          <Text h2 bold style={{marginHorizontal: theme.sizes.base * 2, marginBottom: 10}}>
            Restaurantes
          </Text>     
          <ScrollView
                horizontal={false}
                showsHorizontalScrollIndicator={false} 
                style={{      marginBottom: 15
                }}
                contentContainerStyle={{flexGrow: 1, width: '100%'}}            
                >
                    {restaurants.map(restaurant => (
                    <RestaurantBlock {...restaurant}></RestaurantBlock>
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
  avatar: {
    height: theme.sizes.base * 2.2,
    width: theme.sizes.base * 2.2
  },
});