import React, {Component} from 'react';
import {Body, Header, Title} from 'native-base';

import SignUpForm from './form';

export default class SignUp extends Component {
  render() {
    return (
      <React.Fragment>
        <Header>
          <Body>
            <Title>Sign Up</Title>
          </Body>
        </Header>
        <SignUpForm navigation={this.props.navigation} />
      </React.Fragment>
    );
  }
}
