import React, { Component } from "react";
import {
  Animated,
  Dimensions,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  View,
  Keyboard,
  TouchableWithoutFeedback,
  Text
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";


import { Card, Badge, Button, Block, Input } from "../components";
import { theme, mocks } from "../constants";
import { FlatList } from "react-native-gesture-handler";

const { width, height } = Dimensions.get("window");

const DismissKeyboard = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);

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
      <DismissKeyboard>
        <View style={{ flex: 1 }}>
          <TouchableOpacity style={{
            backgroundColor: 'white', height: 50, width: 50, borderRadius: 10, position: 'absolute',
            left: 35,
            top: 50,
            zIndex: 2,
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <Icon name="ios-arrow-back" style={{ fontSize: 30 }}></Icon>
          </TouchableOpacity>
          <View style={{ flex: 0.3, backgroundColor: 'red' }}>
            <Image source={require('../assets/images/fundoa.png')} style={{ width: '100%', height: '100%', opacity: '0.7' }} />
          </View>
          <View style={{
            flex: 0.22, marginTop: -50, borderTopLeftRadius: 50, borderTopRightRadius: 50, backgroundColor: '#91C6DC', shadowOffset: {
              height: 2,
              width: 0
            },
            shadowColor: "rgba(0,0,0,1)",
            shadowOpacity: 0.5,
            shadowRadius: 5,
          }}>
            <Text style={{ marginLeft: 30, marginTop: 15, fontSize: 20, fontFamily: 'Poppins-Bold' }}>Over the Moon</Text>
            <Text style={{ marginLeft: 30, marginTop: 5, fontSize: 14, fontFamily: 'Poppins-Light' }}>Lanches • 2.5km • Rua da Batata doce, 123</Text>
            <View style={{ flexDirection: 'row', position: 'absolute', bottom: 0, alignItems: 'center' }}>
              <Icon name="ios-star" style={{ marginLeft: 30, fontSize: 15, bottom: 70 }}></Icon>
              <Text style={{ marginLeft: 5, fontSize: 15, fontFamily: 'Poppins-Regular', bottom: 70 }}>4.3  •  352 Avaliações</Text>
              <TouchableOpacity style={{
                backgroundColor: 'white', height: 30, width: 100, borderRadius: 4,
                bottom: 70,
                alignItems: 'center',
                justifyContent: 'center',
                marginLeft: '20%' 
              }}>
                <View style={{
                  flexDirection: 'row', alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                  <Icon name="md-locate" style={{ fontSize: 15,}}></Icon>
                  <Text style={{ fontSize: 10, marginLeft: 5, fontFamily: 'Poppins-SemiBold', color:'blue'}}>Ir para o local</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{
            flex: 0.48, marginTop: -50, borderTopLeftRadius: 50, borderTopRightRadius: 50, backgroundColor: 'white', shadowOffset: {
              height: 2,
              width: 0
            },
            shadowColor: "rgba(0,0,0,1)",
            shadowOpacity: 0.5,
            shadowRadius: 5,
            alignItems: 'center'
          }}>
            <View style={{ flex: 0.15, flexDirection: 'row', paddingHorizontal: 30}}>
            <Text style={{fontSize: 20, fontFamily: 'Poppins-Regular',  marginTop: 30, }}>ENTRADAS</Text>
            <Text style={{fontSize: 20, fontFamily: 'Poppins-Light', color: 'gray', marginTop: 30, }}>    BEBIDAS</Text>
            <Text style={{fontSize: 20, fontFamily: 'Poppins-Light',  color: 'gray', marginTop: 30, }}>    SOBREMESAS</Text>
            </View> 
            {/* <View style={{ flex: 0.85, flexDirection: 'row', paddingHorizontal: 30}}>
            <Text style={{fontSize: 20, fontFamily: 'Poppins-Regular',  marginTop: 30, }}>ENTRADAS</Text>
            <Text style={{fontSize: 20, fontFamily: 'Poppins-Light', color: 'gray', marginTop: 30, }}>    BEBIDAS</Text>
            <Text style={{fontSize: 20, fontFamily: 'Poppins-Light',  color: 'gray', marginTop: 30, }}>    SOBREMESAS</Text>
            </View>             */}
          </View>
        </View>
      </DismissKeyboard >
    );
  }
}

RestaurantHome.defaultProps = {
};

export default RestaurantHome;

const styles = StyleSheet.create({

});