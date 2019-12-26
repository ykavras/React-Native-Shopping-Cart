import React, {Component} from 'react';
import {Body, Header, Title} from 'native-base';
import SignInForm from './form';
import NetInfo from '@react-native-community/netinfo';
import NavigationService from '../../../helper/NavigationService';

const netControl = NetInfo.addEventListener(state => {
  !state.isConnected && NavigationService.navigate('NoInternet');
});

class SignIp extends Component {
  componentDidMount() {
    netControl();
  }
  render() {
    return (
      <>
        <Header>
          <Body>
            <Title>Sign In</Title>
          </Body>
        </Header>
        <SignInForm navigation={this.props.navigation} />
      </>
    );
  }
}
export default SignIp;
