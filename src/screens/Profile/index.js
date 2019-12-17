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
import {connect} from 'react-redux';

class Profile extends Component {
  render() {
    const user = JSON.parse(this.props.SignInReducer.user);
    return (
      <Container>
        <Header>
          <Body>
            <Title>
              {user.name} {user.surname}
            </Title>
          </Body>
        </Header>
        <Content padder>
          <Button
            block
            danger
            onPress={() =>
              Toast.show({
                text: `See you ${user.name} :)`,
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

const mapStateToProps = state => {
  return {
    SignInReducer: state.SignInReducer,
  };
};

const mapStateToDispatch = {};

export default connect(
  mapStateToProps,
  mapStateToDispatch,
)(Profile);
