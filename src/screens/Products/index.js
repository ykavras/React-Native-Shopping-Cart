import React, {Component} from 'react';
import {
  Body,
  Container,
  Header,
  Title,
  Text,
  Left,
  Right,
  Button,
} from 'native-base';
import {FlatList, View} from 'react-native';
import {connect} from 'react-redux';
import {Product} from '../../components/Product';
import styles from './styles';
import {
  RemoveFromCart,
  IncreaseQty,
  DecreaseQty,
  ClearCart,
} from '../../store/Actions/ShoppingCart';
import ProductsData from '../../mockData/products';

class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: ProductsData,
    };
  }

  render() {
    const {products} = this.state;
    const {data} = this.props.ShoppingCartReducer;
    return (
      <Container>
        <Header>
          <Left />
          <Body>
            <Title>Products</Title>
          </Body>
          <Right>
            <Button
              style={{
                width: 40,
                height: 40,
                justifyContent: 'center',
                alignItems: 'center',
              }}
              rounded
              onPress={() => this.props.navigation.toggleDrawer()}>
              <Text style={{position: 'absolute'}}>{data && data.length}</Text>
            </Button>
          </Right>
        </Header>
        <FlatList
          contentContainerStyle={styles.products}
          data={products}
          keyExtractor={p => p.id}
          renderItem={({item}) => (
            <Product
              key={`Product_${item.id}`}
              item={item}
              cartData={data.length > 0 && data}
              plusPress={this.props.IncreaseQty}
              minusPress={this.props.DecreaseQty}
              removeFromCart={this.props.RemoveFromCart}
            />
          )}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
        />
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    ShoppingCartReducer: state.ShoppingCartReducer,
  };
};

const mapStateToDispatch = {
  RemoveFromCart,
  IncreaseQty,
  DecreaseQty,
  ClearCart,
};

export default connect(
  mapStateToProps,
  mapStateToDispatch,
)(Products);
