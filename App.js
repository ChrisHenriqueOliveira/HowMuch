import React from "react";
import { StyleSheet, Keyboard,  TouchableWithoutFeedback, ActivityIndicator } from "react-native";

import { AppLoading } from "expo";
import { Asset } from "expo-asset";

import Navigation from "./navigation";
import { Block } from "./components";

import { Font } from 'expo-font';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      fontLoaded: false
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      'Poppins-Bold': require('./assets/fonts/Poppins-Bold.otf'),
      'Poppins-Black': require('./assets/fonts/Poppins-Black.otf'),
      'Poppins-Light': require('./assets/fonts/Poppins-Light.otf'),
      'Poppins-Medium': require('./assets/fonts/Poppins-Medium.otf'),
      'Poppins-Regular': require('./assets/fonts/Poppins-Regular.otf'),
      'Poppins-SemiBold': require('./assets/fonts/Poppins-SemiBold.otf'),
      'Poppins-Thin': require('./assets/fonts/Poppins-Thin.otf'),
    });

    this.setState({ fontLoaded: true });
  }

  render() {
    return (
      <Block white>
        {this.state.fontLoaded ? (
          <Navigation />
        ) : (
          <ActivityIndicator size="large" />
        )}
      </Block>
    );
  }
}