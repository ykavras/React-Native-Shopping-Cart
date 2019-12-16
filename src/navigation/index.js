import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Loading from '../components/Loading';
import {Home, HomeDetail, Profile, Search, Login} from '../screens';

const TabBar = createBottomTabNavigator({
  Home,
  Search,
  Profile,
});

const AppStack = createStackNavigator(
  {
    Tab: TabBar,
    HomeDetail,
  },
  {
    defaultNavigationOptions: {
      header: null,
    },
  },
);

const AuthStack = createStackNavigator(
  {
    Login,
  },
  {
    defaultNavigationOptions: {
      header: null,
    },
  },
);

const Root = createSwitchNavigator(
  {
    App: AppStack,
    Auth: AuthStack,
    Loading,
  },
  {
    initialRouteName: 'Auth',
  },
);

const AppNavigator = createAppContainer(Root);

export default AppNavigator;
