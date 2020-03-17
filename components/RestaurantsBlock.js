import React, { Component } from "react";
import { StyleSheet, View, Image, TouchableOpacity } from "react-native";
import { Divider } from 'react-native-elements';
import Icon from "react-native-vector-icons/MaterialIcons";
import { Block, Text } from ".";

function RestaurantBlock(props) {
  return (
    <View style={{alignItems: 'center'}}>
        <View style={styles.container}>
            <TouchableOpacity>
                <View style={{flexDirection: 'row'}}>
                    <Image
                    source={props.restImage}
                    style={styles.image}
                    ></Image>
                    <View style={{flexDirection: 'column', marginLeft: 10}}>
                      <Text h2 bold>{props.restTitle}</Text>
                      <Text bold gray styles={{fontSize: 5}}>{props.restInfo}</Text>
                      <View style={{flexDirection: 'row'}}>
                        <Icon name="star" style={styles.icon}></Icon>
                        <Text h3 style={{color: '#007084', marginLeft: 5}}>{props.restStars}</Text>
                      </View>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 5,
    borderColor: "rgba(208,208,208,1)",
    borderWidth: 1,
    width: '90%',
    height: 80,
    marginTop:10,
    justifyContent: 'center',
  },
  image: {
    width: 65,
    height: 65,
    borderRadius: 5,
    marginLeft: 7.5,
    marginRight: 7.5
  },
  icon: {
    color: "rgba(255,206,0,1)",
    fontSize: 20
  },
  rect1: {
    width: 40,
    height: 1,
    backgroundColor: "rgba(155,155,155,1)",
    transform: [
      {
        rotate: "90.00deg"
      }
    ]
  },
});

export default RestaurantBlock;
