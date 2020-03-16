import React, { Component } from "react";
import { StyleSheet, View, Image, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { Block, Text } from "../components";

function RestaurantBlock(props) {
  return (
    <Block>
        <View style={styles.container}>
            <TouchableOpacity>
                <View style={{flexDirection: 'row'}}>
                    <Image
                    source={require("../assets/images/plants_1.png")}
                    style={styles.image}
                    ></Image>
                    <Text h3>Corno</Text>
                </View>
            </TouchableOpacity>
        </View>
    </Block>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 5,
    borderColor: "rgba(208,208,208,1)",
    borderWidth: 1,
    width: '100%',
    height: 80,
    marginTop:10,
    alignItems: 'baseline'
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 5,
    margin: 5
  },
  mexicana54Km: {
    top: 21,
    left: 76,
    color: "rgba(105,106,106,1)",
    position: "absolute",
    fontSize: 13,
  },

  cantinhoDaXuxa: {
    top: 1,
    left: 76,
    color: "rgba(0,0,0,1)",
    position: "absolute",
    fontSize: 15,
  },
  icon: {
    top: 42,
    left: 76,
    position: "absolute",
    color: "rgba(255,206,0,1)",
    fontSize: 10
  },
  mexicana55: {
    top: 39,
    left: 98,
    color: "rgba(0,112,132,1)",
    position: "absolute",
    fontSize: 15,
    fontFamily: "poppins-regular"
  },
  view: {
    marginTop: 7,
    marginLeft: 7
  }
});

export default RestaurantBlock;
