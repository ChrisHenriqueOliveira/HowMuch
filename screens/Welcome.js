import React, { Component } from "react";
import {
  Animated,
  Dimensions,
  Image,
  FlatList,
  Modal,
  StyleSheet,
  ScrollView
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

import { Button, Block, Text } from "../components";
import { theme } from "../constants";

const { width, height } = Dimensions.get("window");

class Welcome extends Component {
    static navigationOptions = {
        header: null
    };

    scrollX = new Animated.Value(0);

    state = {
      showTerms: false
    };

    render() {
        const { navigation } = this.props;
    
        return (
          <Block>
            <Block center middle>
              <Image
              source={require('../assets/images/welcomeLogo.png')}
              resizeMode="contain"
              style={{ width: '70%', height: height / 2, overflow: "visible" }}
            />
            </Block>
            <Block middle flex={0.5} margin={[0, theme.sizes.padding * 2]}>
              <Button onPress={() => navigation.navigate("Login")} style={styles.facebookLoginButton}>
              <Icon name="facebook-f" style={styles.icon}></Icon>
                <Text center semibold white>
                LOGAR COM FACEBOOK
                </Text>
              </Button>
              <Button shadow onPress={() => navigation.navigate("SignUp")} style={styles.visitorLoginButton}>
                <Text center semibold pink>
                LOGAR COMO VISITANTE
                </Text>
              </Button>
              <Button onPress={() => this.setState({ showTerms: true })} style={{backgroundColor: 'transparent'}}>
                <Text center caption gray>
                  Terms of service
                </Text>
              </Button>
            </Block>
          </Block>
        );
    }
}

const styles = StyleSheet.create({
  icon: {
    left: 27,
    position: "absolute",
    color: "rgba(255,255,255,1)",
    fontSize: 25,
  },
  visitorLoginButton: {
    backgroundColor: 'transparent',
    borderRadius: 5,
    borderColor: "rgba(233,51,84,1)",
    borderWidth: 1,
  },
  facebookLoginButton: {
    backgroundColor: 'rgba(29,85,197,1)',
  }
});

export default Welcome;
