import React, { Component } from "react";
import {
  Dimensions,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  StatusBar,
  View
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { Card, Badge, Button, Block, Text } from "../components";
import CategoriesBlock from "../components/CategoriesBlock";
import RestaurantBlock from "../components/RestaurantBlock";

import { theme, mocks } from "../constants";
import { categories } from "../constants/mocks";

const { width } = Dimensions.get("window");

class Browse extends Component {
    state = {
        categories: []
    };
  
    componentDidMount() {
      this.setState({ categories: this.props.categories });
    }
  
    render() {
      const { profile, navigation } = this.props;
      const { categories } = this.state;
      const tabs = ["Products", "Inspirations", "Shop"];
  
      return (
        <Block style={{backgroundColor: 'white'}}>
            <Block middle flex={0.25} style={styles.topBlock}>
                <Block flex={false} column style={styles.header}>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                        <Text h1 style={{marginTop: 20}}>
                        Olá Visitante,
                        </Text>    
                        <Button onPress={() => navigation.navigate("Settings")} style={{borderRadius: 50}}>
                            <Image source={profile.avatar} style={styles.avatar} />
                        </Button>
                    </View>    
                    <View style={{alignItems: 'center', marginTop: 15}}>
                        <Button
                        gradient
                        onPress={() =>({})} style={{width: '100%', height: 80}}
                        >
                            <View style={{flexDirection: 'row', alignContent: 'flex-end'}}>
                                <Text h1 bold left white styles={{marginTop: 40}}>
                                {`     Seus\n     Favoritos`}
                                </Text>
                                <Icon name="favorite" style={styles.icon}></Icon>
                            </View>
                        </Button>   
                    </View>
                </Block>
           </Block> 
            <Block flex={0.18} style={styles.categoriesBlock}>
                <Block flex={false} column style={styles.blockHeader}>
                    <Text bold style={{fontSize: 22}}>
                    Categorias
                    </Text>     
                </Block>
                <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false} 
                contentContainerStyle={{flexGrow: 1, justifyContent : 'center', marginTop: 10}}            
                >
                    {categories.map(category => (
                    <CategoriesBlock {...category}></CategoriesBlock>
                    ))}
                </ScrollView>
            </Block>
            <Block flex={0.57} style={styles.restaurantsBlock}>
                <Block flex={false} column style={styles.blockHeader}>
                    <Text bold style={{fontSize: 22}}>
                    Restaurantes
                    </Text>    
                    {/* <ScrollView
                    horizontal={false}
                    showsHorizontalScrollIndicator={false} 
                    contentContainerStyle={{flexGrow: 1, justifyContent : 'center', marginTop: 10}}            
                    >
                    {categories.map(category => (
                    <CategoriesBlock {...category}></CategoriesBlock>
                    ))}
                </ScrollView>  */}
                    <RestaurantBlock></RestaurantBlock>
                </Block>
            </Block>
        </Block>
    );
  }
}

Browse.defaultProps = {
  profile: mocks.profile,
  categories: mocks.categories
};

export default Browse;

const styles = StyleSheet.create({
    categories: {
        width: 90,
        height: 90,
        marginBottom: 10,
        marginTop: 5

    },
    header: {
    paddingHorizontal: theme.sizes.base * 2,
    },
    topBlock:{
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
    blockHeader: {
    paddingHorizontal: theme.sizes.base * 2,
    marginTop: 5
    },
    categoriesBlock:{
    backgroundColor: 'white',
    shadowOffset: {
        height: 6,
        width: 0
      },
      shadowColor: "rgba(0,0,0,1)",
      shadowOpacity: 0.1,
      shadowRadius: 20,
      zIndex: 1
    },
    restaurantsBlock:{
        backgroundColor: 'white',
        shadowOffset: {
            height: 6,
            width: 0
          },
          shadowColor: "rgba(0,0,0,1)",
          shadowOpacity: 0.1,
          shadowRadius: 20,
          zIndex: 0
      },
    icon: {
    fontSize: 50,
    left: '230%',
    top: 5,
    color: '#E93354',
    },
  avatar: {
    height: theme.sizes.base * 2.2,
    width: theme.sizes.base * 2.2,
  },
});