/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import AppNavigator from '../navigation';
import NavigationService from '../helper/NavigationService';
import {Provider} from 'react-redux';
import store from '../store';

const App = () => {
  return (
    <Provider store={store}>
      <AppNavigator
        ref={navigatorRef => {
          NavigationService.setTopLevelNavigator(navigatorRef);
        }}
      />
    </Provider>
  );
};

export default App;
