import React, {Component} from 'react';
import {Body, Container, Header, Title} from 'native-base';

class Products extends Component {
  componentDidMount() {
    console.log('Search');
  }

  render() {
    return (
      <Container>
        <Header>
          <Body>
            <Title>Products</Title>
          </Body>
        </Header>
      </Container>
    );
  }
}

export default Products;
