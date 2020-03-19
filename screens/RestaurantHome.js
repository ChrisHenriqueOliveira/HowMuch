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
import Icon from "react-native-vector-icons/Ionicons";


import { Card, Badge, Button, Block, Text, Input } from "../components";
import { theme, mocks } from "../constants";

const { width, height } = Dimensions.get("window");

class RestaurantHome extends Component {
  static navigationOptions = {
    headerShown: false
  };

  constructor(props) {
    super(props)

    this.state = {
      restaurant: this.props.navigation.state.params.restaurant,
    };
  }

  componentDidMount() {

  }

  render() {
    const { navigation } = this.props;
    return (
      <Block style={{ backgroundColor: 'white' }}>
        <Block flex={0.19} row center style={styles.headerContainer}>
          <Image
            style={styles.stretch}
            resizeMode="stretch"
            source={this.state.restaurant.restImage}
            blurRadius={7}
          ></Image>
        </Block>
        <Block flex={false} style={styles.restaurantInfo}>
          <View style={{ marginLeft: 10, marginRight: 10 }}>
          <Block flex={false} row center>
          <Icon name="ios-arrow-back" style={styles.iconBack} onPress={() => navigation.goBack()}></Icon>
            <Text bold numberOfLines={1} style={{ fontSize: 20, marginBottom: 5, marginLeft: 5 }}>
              {this.state.restaurant.restTitle.length < 20
                ? `${this.state.restaurant.restTitle}`
                : `${this.state.restaurant.restTitle.substring(0, 20)}...`}</Text>
                </Block>
            <Text gray numberOfLines={1} style={{ fontSize: 14, marginBottom: 5, color: 'gray' }}>{this.state.restaurant.restInfo}{' • '}{this.state.restaurant.restAddr}</Text>
            <Block flex={false} row space="between">
            <Text green bold numberOfLines={1} style={{ fontSize: 15, marginBottom: 5 }}>ABERTO AGORA</Text>
            <Text fbBlue bold numberOfLines={1} style={{ fontSize: 15, marginBottom: 5 }}>Ir para local</Text>
            </Block>
          </View>
        </Block>
      </Block>
    );
  }
}

RestaurantHome.defaultProps = {
};

export default RestaurantHome;

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: 'white',
    shadowOffset: {
      height: 10,
      width: 0
    },
    shadowColor: "rgba(0,0,0,1)",
    shadowOpacity: 0.1,
    shadowRadius: 20,
    zIndex: 2,
  },
  restaurantInfo: {
    backgroundColor: 'white',
    shadowOffset: {
      height: 6,
      width: 0
    },
    shadowColor: "rgba(0,0,0,1)",
    shadowOpacity: 0.1,
    shadowRadius: 20,
    zIndex: 1,
    padding: 5
  },
  stretch: {
    width: width,
    height: '100%',
  },
  iconBack: {
    fontSize: 30,
  },
  goToLocal:{
    fontSize: 5, 
    textDecorationLine: 'underline'
  }
});