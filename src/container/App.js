/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {Root} from 'native-base';
import AppNavigator from '../navigation';
import NavigationService from '../helper/NavigationService';
import {Provider} from 'react-redux';
import store from '../store';

const App = () => {
  return (
    <Provider store={store}>
      <Root>
        <AppNavigator
          ref={navigatorRef => {
            NavigationService.setTopLevelNavigator(navigatorRef);
          }}
        />
      </Root>
    </Provider>
  );
};

export default App;
