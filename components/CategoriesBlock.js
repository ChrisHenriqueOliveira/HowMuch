import React, { Component } from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";
import { Button } from "../components";

function CategoriesBlock(props) {
  return (
    <View style={styles.container}>
        <TouchableOpacity>
            <View style={styles.view}>
                <Image
                source={props.catImage}
                resizeMode="contain"
                style={styles.image}
                ></Image>
                <Text style={styles.text}>{props.catTitle}</Text>
            </View>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
      margin:10
  },
  view: {
    width: 90,
    height: 90,
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 5,
    borderColor: "rgba(208,208,208,1)",
    borderWidth: 1,
 
    alignItems: 'center'
  },
  image: {
    width: 60,
    height: 60,
    marginTop: 5,
  },
  text: {
    color: "#121212",
    fontSize: 13,
    textAlign: "center",
    marginTop: 5
  }
});

export default CategoriesBlock;
