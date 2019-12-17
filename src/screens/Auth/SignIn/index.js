import React, {Component} from 'react';
import {Body, Header, Title} from 'native-base';

import SignInForm from './form';

class SignIp extends Component {
  render() {
    return (
      <React.Fragment>
        <Header>
          <Body>
            <Title>Sign In</Title>
          </Body>
        </Header>
        <SignInForm navigation={this.props.navigation} />
      </React.Fragment>
    );
  }
}
export default SignIp;
