import React, {Component} from 'react';
import {
  Container,
  Content,
  Text,
  Button,
  Toast,
  Body,
  Title,
  Header,
} from 'native-base';
import AuthControl from '../../helper/AuthControl';
export default class ToastDuration extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Body>
            <Title>Profile</Title>
          </Body>
        </Header>
        <Content padder>
          <Button
            block
            danger
            onPress={() =>
              Toast.show({
                text: 'See you :)',
                textStyle: {textAlign: 'center'},
                onClose: () => AuthControl.removeToken(),
              })
            }>
            <Text>Logout</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}
