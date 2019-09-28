import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import HomeScreen2 from '../screens/HomeScreen2';

import LinksScreen from '../screens/LinksScreen';
import LinksScreen2 from '../screens/LinksScreen2';

import SettingsScreen from '../screens/SettingsScreen';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});


//Home
const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
  },
  config
);
HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};
HomeStack.path = '';
//end Home

//home2
const HomeStack2 = createStackNavigator(
  {
    Home: HomeScreen2,
  },
  config
);
HomeStack2.navigationOptions = {
  tabBarLabel: 'Home2',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};
HomeStack2.path = '';
//end Home

//links
const LinksStack = createStackNavigator(
  {
    Links: LinksScreen,
  },
  config
);
LinksStack.navigationOptions = {
  tabBarLabel: 'Links',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'} />
  ),
};
LinksStack.path = '';
//end links


//links
const LinksStack2 = createStackNavigator(
  {
    Links: LinksScreen2,
  },
  config
);
LinksStack2.navigationOptions = {
  tabBarLabel: 'Links2',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'} />
  ),
};
LinksStack2.path = '';
//end links

//
const SettingsStack = createStackNavigator(
  {
    Settings: SettingsScreen,
  },
  config
);
SettingsStack.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'} />
  ),
};
SettingsStack.path = '';
//

const tabNavigator = createBottomTabNavigator({
  HomeStack,
  HomeStack2,
  LinksStack,
  LinksStack2,
  SettingsStack,
},
{
  initialRouteName: "LinksStack2"
}
);

tabNavigator.path = '';

export default tabNavigator;
