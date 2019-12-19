import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {
  Main,
  MainDetail,
  Profile,
  Products,
  AuthLoading,
  SignIn,
  SignUp,
} from '../screens';
import DrawerMenu from './DrawerMenu';

const TabBarTabNavigator = createBottomTabNavigator({
  Main,
  Products,
  Profile,
});

const DrawerNavigator = createDrawerNavigator(
  {
    TabBarTabNavigator,
  },
  {contentComponent: () => <DrawerMenu />},
);

const AppStack = createStackNavigator(
  {
    App: DrawerNavigator,
    MainDetail,
  },
  {
    defaultNavigationOptions: {
      header: null,
    },
  },
);

const AuthStack = createSwitchNavigator(
  {
    SignIn,
    SignUp,
  },
  {
    defaultNavigationOptions: {
      header: null,
    },
  },
);

const Root = createSwitchNavigator(
  {
    AuthLoading: AuthLoading,
    Auth: AuthStack,
    App: AppStack,
  },
  {
    initialRouteName: 'AuthLoading',
  },
);

const AppNavigator = createAppContainer(Root);

export default AppNavigator;
