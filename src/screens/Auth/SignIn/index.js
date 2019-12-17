import React, {Component} from 'react';
import {Body, Header, Title} from 'native-base';
import SignInForm from './form';

class SignIp extends Component {
  render() {
    return (
      <>
        <Header>
          <Body>
            <Title>Sign In</Title>
          </Body>
        </Header>
        <SignInForm />
      </>
    );
  }
}
export default SignIp;
