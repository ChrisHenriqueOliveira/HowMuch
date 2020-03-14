import React from 'react';
import { Image } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Welcome from '../screens/Welcome';

import { theme } from '../constants'

const screens = createStackNavigator({
    Welcome,
}, {
    defaultNavigationOprions: {
        headerStyle: {},
        headerBackImage: <Image />,
        headerBackTitle: null,
        headaerLeftContainerStyle: {},
        headaerRightContainerStyle: {},
    }
});

export default createAppContainer(screens);