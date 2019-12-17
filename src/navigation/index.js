import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {
  Main,
  MainDetail,
  Profile,
  Search,
  AuthLoading,
  SignIn,
  SignUp,
} from '../screens';

const TabBar = createBottomTabNavigator({
  Main,
  Search,
  Profile,
});

const AppStack = createStackNavigator(
  {
    Tab: TabBar,
    MainDetail,
  },
  {
    defaultNavigationOptions: {
      header: null,
    },
  },
);

const AuthStack = createStackNavigator(
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
    App: AppStack,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'AuthLoading',
  },
);

const AppNavigator = createAppContainer(Root);

export default AppNavigator;
