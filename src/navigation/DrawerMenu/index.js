import React, {Component} from 'react';
import {ImageBackground, FlatList, View} from 'react-native';
import styles from './styles';
import {Button, Text} from 'native-base';
import {
  ClearCart,
  DecreaseQty,
  IncreaseQty,
  RemoveFromCart,
} from '../../store/Actions/ShoppingCart';
import {connect} from 'react-redux';
import {ProductCart} from '../../components/ProductCart';
import NavigationService from '../../helper/NavigationService';

class DrawerMenu extends Component {
  componentDidMount() {
    console.log('DrawerMenu');
  }

  render() {
    const {data} = this.props.ShoppingCartReducer;
    return (
      <ImageBackground
        style={styles.wrapper}
        source={{uri: 'https://cutt.ly/drq2O4V'}}>
        {data.length > 0 ? (
          <FlatList
            contentContainerStyle={styles.products}
            data={data}
            keyExtractor={p => p.id}
            renderItem={({item}) => (
              <ProductCart
                key={`ProductCart_${item.id}`}
                item={item}
                cartData={data.length > 0 && data}
                plusPress={this.props.IncreaseQty}
                minusPress={this.props.DecreaseQty}
                removeFromCart={this.props.RemoveFromCart}
              />
            )}
            ItemSeparatorComponent={() => <View style={styles.separator} />}
          />
        ) : (
          <Button
            warning
            block
            style={styles.emptyCartBtn}
            onPress={() => NavigationService.navigate('Products')}>
            <Text>Your Empty Cart :(</Text>
          </Button>
        )}
      </ImageBackground>
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
)(DrawerMenu);
